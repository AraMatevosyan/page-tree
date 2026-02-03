import styles from './styles.module.scss';

import type { Side } from '../../types.ts';

type Props = {
  title: string;
  side?: Side;
};

export function Page({ title, side }: Props) {
  const childClassName =
    side === 'left'
      ? styles.leftChild
      : side === 'right'
        ? styles.rightChild
        : null;

  return (
    <div className={styles.page}>
      {childClassName && (
        <div className={childClassName}>
          <div />
          <div />
        </div>
      )}
      <div className={styles.pageBody}>{title}</div>
    </div>
  );
}
