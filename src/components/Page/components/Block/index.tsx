import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import {
  changeBlockTitle,
  deleteBlock,
} from '../../../../store/slices/pageSlice';
import { DeleteButton } from '../../../Controls/DeleteButton';
import { useBlockDnd } from '../../hooks/useBlockDnd.tsx';
import { TitleInput } from '../TitleInput';

import type { PageBlock } from '../../../../store/slices/pageSlice/types.ts';

type Props = {
  block: PageBlock;
  active?: boolean;
  path: string[];
};

export function Block({ block, path, active = false }: Props) {
  const { id, title } = block;
  const dispatch = useDispatch();

  const { isDragging, isOver, dndProps } = useBlockDnd(path, id);

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
      <TitleInput
        value={title}
        onChange={value =>
          dispatch(changeBlockTitle({ path, blockId: id, title: value }))
        }
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
