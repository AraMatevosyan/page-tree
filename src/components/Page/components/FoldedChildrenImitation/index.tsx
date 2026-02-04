import clsx from 'clsx';

import styles from '../../styles.module.scss';

type Props = {
  visible: boolean;
};

export function FoldedChildrenImitation({ visible }: Props) {
  if (!visible) return null;

  return (
    <>
      <div className={clsx(styles.shadow, styles.shadowFirst)} />
      <div className={clsx(styles.shadow, styles.shadowSecond)} />
    </>
  );
}
