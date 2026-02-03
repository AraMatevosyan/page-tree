import type { PageNode } from '../types.ts';

export const mockTree: PageNode = {
  id: 'main',
  title: 'Main',
  children: [
    {
      id: 'left-page',
      title: 'Page',
      children: [
        {
          id: 'left-1',
          title: 'New Page',
          children: [
            { id: 'left-1-1', title: 'Leaf Page' },
            { id: 'left-1-2', title: 'Leaf Page' },
          ],
        },
        {
          id: 'left-2',
          title: 'New Page',
          children: [
            { id: 'left-2-1', title: 'Leaf Page' },
            { id: 'left-2-2', title: 'Leaf Page' },
          ],
        },
      ],
    },
    {
      id: 'right-page',
      title: 'Page',
      children: [
        {
          id: 'right-1',
          title: 'Page',
          children: [
            { id: 'right-1-1', title: 'Leaf Page' },
            { id: 'right-1-2', title: 'Leaf Page' },
            { id: 'right-1-3', title: 'Leaf Page' },
          ],
        },
        {
          id: 'right-2',
          title: 'New Page',
          children: [
            { id: 'right-2-1', title: 'Leaf Page' },
            { id: 'right-2-2', title: 'Leaf Page' },
          ],
        },
        {
          id: 'right-3',
          title: 'New Page',
          children: [
            { id: 'right-3-1', title: 'Leaf Page' },
            { id: 'right-3-2', title: 'Leaf Page' },
          ],
        },
      ],
    },
  ],
};
