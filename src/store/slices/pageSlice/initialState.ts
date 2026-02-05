import { createId } from './utils.ts';

import type { PagesState } from './types.ts';

export const initialState: PagesState = {
  root: {
    title: 'Main',
    id: createId(),
    pageBlocks: [],
    children: [],
  },
};
