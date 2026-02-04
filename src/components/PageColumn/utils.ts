import type { Side } from '../../types.ts';

export function getChildMeta(
  idx: number,
  total: number
): { side: Side; layoutClassName?: string; isSingle: boolean } {
  const last = total - 1;
  const isMiddle = idx !== 0 && idx !== last;
  return {
    side: idx % 2 === 0 ? 'left' : 'right',
    layoutClassName: isMiddle ? 'rowLine' : undefined,
    isSingle: total === 1,
  };
}

export function getRowClassName(
  isSingle?: boolean,
  side?: Side
): string | null {
  if (!isSingle && side === 'left') {
    return 'rowLeftChild';
  }

  if (side === 'right') {
    return 'rowRightChild';
  }

  return null;
}
