import clsx from 'clsx';
import { useMemo, useState } from 'react';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { getChildClassName } from './utils.ts';
import {
  addBlock,
  dropBlock,
  setActivePath,
} from '../../store/slices/pageSlice';
import { AddButton, AddElementButton, ToggleButton } from '../Controls';
import { Block } from './components';
import { DeleteButton } from '../Controls/DeleteButton';

import type { PageBlock } from '../../store/slices/pageSlice/types.ts';
import type { Side } from '../../types.ts';

type Props = {
  title: string;
  side?: Side;
  isSingle?: boolean;
  hasChildren: boolean;
  toggleChildrenVisibility: () => void;
  isChildrenVisible: boolean;
  isEdgeChild: boolean;
  pageBlocks: PageBlock[];
  path: string[];
};

export function Page({
  title,
  side,
  isSingle,
  hasChildren,
  toggleChildrenVisibility,
  isChildrenVisible,
  pageBlocks,
  path,
}: Props) {
  const dispatch = useDispatch();

  const [isHover, setHover] = useState(false);
  const [isActive, setActive] = useState(false);

  const childClassName = getChildClassName(isSingle, side);

  const showAddButton = !hasChildren && isHover;
  const showToggleButton = hasChildren && isHover;
  const showRemoveButton = isActive;
  const showAddElementButton = isActive;

  const activate = () => {
    dispatch(setActivePath(path));
    setActive(true);
  };

  const deactivate: React.FocusEventHandler<HTMLDivElement> = e => {
    const next = e.relatedTarget as Node | null;
    if (!next || !e.currentTarget.contains(next)) {
      dispatch(setActivePath([]));
      setActive(false);
    }
  };

  const dndProps = useMemo(() => {
    const onDragOver: React.DragEventHandler<HTMLDivElement> = e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };

    const onDrop: React.DragEventHandler<HTMLDivElement> = e => {
      e.preventDefault();
      dispatch(dropBlock({ toPath: path }));
    };

    return { onDragOver, onDrop };
  }, [dispatch, path]);

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
        {...dndProps}
        tabIndex={0}
        onClick={activate}
        onBlur={deactivate}
        className={clsx(styles.pageBody, { [styles.active]: isActive })}
      >
        {title}
        <div className={styles.blocks}>
          {pageBlocks.map(block => (
            <Block path={path} key={block.id} block={block} active={isActive} />
          ))}
          {showAddElementButton && (
            <AddElementButton onClick={() => dispatch(addBlock({ path }))} />
          )}
        </div>
        <div className={styles.actions}>
          {showAddButton && <AddButton onClick={() => null} />}
          {showToggleButton && (
            <ToggleButton
              isClosed={isChildrenVisible}
              onClick={toggleChildrenVisibility}
            />
          )}
        </div>
        {showRemoveButton && (
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
