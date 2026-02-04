import { createId } from './utils.ts';

import type { PagesState } from './types.ts';

export const initialState: PagesState = {
  activePath: [],
  root: {
    title: 'Main',
    id: createId(),
    showSubPages: true,
    pageBlocks: [],
    children: [
      {
        title: 'Page',
        id: createId(),
        showSubPages: true,
        pageBlocks: [{ title: 'Block', id: createId() }],
        children: [],
      },
      {
        title: 'Page',
        id: createId(),
        showSubPages: true,
        pageBlocks: [],
        children: [],
      },
      {
        title: 'Page',
        id: createId(),
        showSubPages: true,
        pageBlocks: [
          { title: 'Block 1', id: createId() },
          { title: 'Block 2', id: createId() },
          { title: 'Block 3', id: createId() },
        ],
        children: [],
      },
      {
        title: 'Page',
        id: createId(),
        showSubPages: true,
        pageBlocks: [],
        children: [
          {
            title: 'Page',
            id: createId(),
            showSubPages: true,
            pageBlocks: [],
            children: [],
          },
        ],
      },
    ],
  },
};
