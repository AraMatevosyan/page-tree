export type PageNode = {
  id: string;
  title: string;
  children: PageNode[];
};

export type Side = 'left' | 'right';
