import { createId } from './utils.ts';

import type { PagesState } from './types.ts';

export const initialState: PagesState = {
  root: {
    title: 'Main',
    id: createId(),
    pageBlocks: [],
    children: [
      {
        title: 'Page',
        id: createId(),
        pageBlocks: [{ title: 'Block', id: createId() }],
        children: [],
      },
      {
        title: 'Page',
        id: createId(),
        pageBlocks: [],
        children: [],
      },
      {
        title: 'Page',
        id: createId(),
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
        pageBlocks: [],
        children: [
          {
            title: 'Page',
            id: createId(),
            pageBlocks: [],
            children: [],
          },
        ],
      },
    ],
  },
};
