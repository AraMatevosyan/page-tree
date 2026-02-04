export type PageBlock = { title: string; id: string };

export type PageStateNode = {
  title: string;
  id: string;
  showSubPages: boolean;
  pageBlocks: PageBlock[];
  children: PageStateNode[];
};

export type PagesState = {
  activePath: number[];
  root: PageStateNode;

  dnd?: {
    fromPath: number[];
    fromBlockIndex: number;
  };
};
