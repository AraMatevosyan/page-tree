import type { PageStateNode } from './types.ts';

export const createId = () => crypto.randomUUID();

export function getNodeByPath(
  root: PageStateNode,
  path: string[]
): PageStateNode {
  let current: PageStateNode = root;

  for (const id of path) {
    const next = current.children.find(child => child.id === id);

    if (!next) {
      throw new Error(`Node with id "${id}" not found`);
    }

    current = next;
  }

  return current;
}

export function getParentByPath(
  root: PageStateNode,
  path: string[]
): { parent: PageStateNode; index: number } {
  if (path.length === 0) return { parent: root, index: -1 };
  const index = path[path.length - 1];
  const parentPath = path.slice(0, -1);
  const parent = getNodeByPath(root, parentPath);
  return { parent, index };
}
