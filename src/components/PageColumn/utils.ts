import type { Side } from '../../types.ts';

export function getChildMeta(
  idx: number,
  total: number
): { side: Side; layoutClassName?: string } {
  const last = total - 1;
  const isMiddle = idx !== 0 && idx !== last;
  return {
    side: idx === 0 ? 'left' : 'right',
    layoutClassName: isMiddle ? 'rowLine' : undefined,
  };
}
