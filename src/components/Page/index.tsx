import clsx from 'clsx';
import { useState } from 'react';

import styles from './styles.module.scss';
import { getChildClassName } from './utils.ts';
import { AddButton, AddElementButton, ToggleButton } from '../Controls';
import { DeleteButton } from '../Controls/DeleteButton';

import type { Side } from '../../types.ts';

type Props = {
  title: string;
  side?: Side;
  isSingle?: boolean;
  hasChildren: boolean;
  toggleChildrenVisibility: () => void;
  isChildrenVisible: boolean;
  isEdgeChild: boolean;
};

export function Page({
  title,
  side,
  isSingle,
  hasChildren,
  toggleChildrenVisibility,
  isChildrenVisible,
}: Props) {
  const [isHover, setHover] = useState(false);
  const [isActive, setActive] = useState(false);
  const childClassName = getChildClassName(isSingle, side);

  return (
    <div
      className={styles.page}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {childClassName && (
        <div className={styles[childClassName]}>
          <div />
          <div />
        </div>
      )}
      <div
        tabIndex={0}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={clsx(styles.pageBody, { [styles.active]: isActive })}
      >
        {title}
        <div className={styles.blocks}>
          {isActive && <AddElementButton onClick={() => null} />}
        </div>
        <div className={styles.actions}>
          {!hasChildren && isHover && <AddButton onClick={() => null} />}
          {hasChildren && isHover && (
            <ToggleButton
              isClosed={isChildrenVisible}
              onClick={toggleChildrenVisibility}
            />
          )}
        </div>
        {isActive && (
          <div className={styles.remove}>
            <DeleteButton onClick={() => null} />
          </div>
        )}
      </div>
      {!isChildrenVisible && (
        <>
          <div className={clsx(styles.shadow, styles.shadowFirst)} />
          <div className={clsx(styles.shadow, styles.shadowSecond)} />
        </>
      )}
    </div>
  );
}
