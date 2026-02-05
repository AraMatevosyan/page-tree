export type PageBlock = { title: string; id: string };

export type PageStateNode = {
  title: string;
  id: string;
  pageBlocks: PageBlock[];
  children: PageStateNode[];
};

type DndState = {
  fromPath: string[];
  blockId: string;
};

export type PagesState = {
  root: PageStateNode;
  dnd?: DndState;
};
