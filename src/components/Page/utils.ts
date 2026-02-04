import type { Side } from '../../types.ts';

export function getChildClassName(
  isSingle?: boolean,
  side?: Side
): string | null {
  if (!isSingle && side === 'left') {
    return 'leftChild';
  }

  if (side === 'right') {
    return 'rightChild';
  }

  return null;
}
