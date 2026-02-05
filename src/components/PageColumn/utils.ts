import type { Side } from '../../types.ts';

export function getChildMeta(
  idx: number,
  total: number
): {
  side: Side;
  layoutClassName?: string;
  isSingle: boolean;
  isEdgeChild: boolean;
} {
  const last = total - 1;
  const isFirst = idx === 0;
  const isMiddle = idx !== 0 && idx !== last;
  const isLast = idx === last;
  const isSingle = total === 1;
  const isEdgeChild = !isSingle && (idx === 0 || idx === last);

  let side: Side;

  if (isFirst) {
    side = 'left';
  } else if (isLast) {
    side = 'right';
  } else {
    side = idx % 2 === 0 ? 'left' : 'right';
  }

  return {
    layoutClassName: isMiddle ? 'rowLine' : undefined,
    side,
    isSingle,
    isEdgeChild,
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
