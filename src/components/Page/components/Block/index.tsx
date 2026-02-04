import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import {
  changeBlockTitle,
  deleteBlock,
} from '../../../../store/slices/pageSlice';
import { DeleteButton } from '../../../Controls/DeleteButton';
import { useBlockDnd } from '../../hooks/useBlockDnd.tsx';

import type { PageBlock } from '../../../../store/slices/pageSlice/types.ts';

type Props = {
  block: PageBlock;
  active?: boolean;
  path: string[];
};

export function Block({ block, path, active = false }: Props) {
  const { id, title } = block;
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { isDragging, isOver, dndProps } = useBlockDnd(path, id);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  return (
    <div
      {...dndProps}
      draggable
      className={clsx(
        styles.block,
        active ? styles.active : styles.passive,
        isOver && styles.dropOver,
        isDragging && styles.dragging
      )}
    >
      <input
        ref={inputRef}
        className={styles.input}
        value={title}
        readOnly={!isEditing}
        onClick={() => setEditing(true)}
        onChange={e =>
          dispatch(
            changeBlockTitle({ path, blockId: id, title: e.target.value })
          )
        }
        onBlur={() => setEditing(false)}
        onKeyDown={e => e.key === 'Enter' && setEditing(false)}
        onMouseDown={e => e.stopPropagation()}
        onDragStart={e => e.preventDefault()}
      />

      {active && (
        <DeleteButton
          className={styles.delete}
          onClick={() => dispatch(deleteBlock({ path, blockId: id }))}
          withBorder={false}
        />
      )}
    </div>
  );
}
