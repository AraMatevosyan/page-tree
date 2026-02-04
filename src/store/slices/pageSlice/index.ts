import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './initialState.ts';
import { createId, getNodeByPath } from './utils.ts';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {
    setActivePath(state, action: PayloadAction<string[]>) {
      state.activePath = action.payload;
    },

    addBlock(state, action: PayloadAction<{ path: string[] }>) {
      const node = getNodeByPath(state.root, action.payload.path);
      node.pageBlocks.push({ title: 'New Block', id: createId() });
    },

    deleteBlock(
      state,
      action: PayloadAction<{ path: string[]; blockId: string }>
    ) {
      const node = getNodeByPath(state.root, action.payload.path);
      node.pageBlocks = node.pageBlocks.filter(
        b => b.id !== action.payload.blockId
      );
    },

    changeBlockTitle(
      state,
      action: PayloadAction<{
        path: string[];
        blockId: string;
        title: string;
      }>
    ) {
      const node = getNodeByPath(state.root, action.payload.path);
      if (!node) return;

      const block = node.pageBlocks.find(b => b.id === action.payload.blockId);
      if (!block) return;

      block.title = action.payload.title;
    },

    dragStartBlock(
      state,
      action: PayloadAction<{ fromPath: string[]; blockId: string }>
    ) {
      state.dnd = action.payload;
    },

    dropBlock(
      state,
      action: PayloadAction<{ toPath: string[]; afterBlockId?: string }>
    ) {
      // Abort if there is no active drag operation
      if (!state.dnd) return;

      // Resolve source and destination nodes using paths
      const fromNode = getNodeByPath(state.root, state.dnd.fromPath);
      const toNode = getNodeByPath(state.root, action.payload.toPath);

      // Safety check: if either node does not exist, cancel DnD
      if (!fromNode || !toNode) {
        state.dnd = undefined;
        return;
      }

      // Find the index of the dragged block in the source node
      const fromIndex = fromNode.pageBlocks.findIndex(
        b => b.id === state.dnd!.blockId
      );

      // If the block cannot be found, cancel DnD
      if (fromIndex === -1) {
        state.dnd = undefined;
        return;
      }

      // Default insertion index:
      // insert at the beginning of the destination list
      let toIndex = 0;

      // If an "afterBlockId" is provided, insert after that block
      if (action.payload.afterBlockId) {
        const found = toNode.pageBlocks.findIndex(
          b => b.id === action.payload.afterBlockId
        );

        if (found !== -1) {
          // +1 means "insert after the target block"
          toIndex = found + 1;
        }
      }

      // Check whether the source and destination are the same list
      const sameList =
        state.dnd.fromPath.length === action.payload.toPath.length &&
        state.dnd.fromPath.every((v, i) => v === action.payload.toPath[i]);

      // If moving within the same list and the dragged item was originally
      // located before the insertion index, we must decrease the index
      // because removing the item shifts the array to the left
      if (sameList && fromIndex < toIndex) {
        toIndex -= 1;
      }

      // Remove the block from the source list
      const [moved] = fromNode.pageBlocks.splice(fromIndex, 1);

      // Safety check: if nothing was removed, cancel DnD
      if (!moved) {
        state.dnd = undefined;
        return;
      }

      // Clamp the insertion index to valid array bounds
      toIndex = Math.max(0, Math.min(toIndex, toNode.pageBlocks.length));

      // Insert the block into the destination list
      toNode.pageBlocks.splice(toIndex, 0, moved);

      // Clear drag-and-drop state
      state.dnd = undefined;
    },
  },
});

export const {
  addBlock,
  deleteBlock,
  changeBlockTitle,
  setActivePath,
  dragStartBlock,
  dropBlock,
} = pagesSlice.actions;

export default pagesSlice.reducer;
