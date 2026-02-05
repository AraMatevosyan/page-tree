import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  dragEndBlock,
  dragStartBlock,
  dropBlock,
} from '../../../store/slices/pageSlice';
import { DND_BLOCK_MIME } from '../../../types.ts';

export function useBlockDnd(path: string[], blockId: string) {
  const dispatch = useDispatch();

  const [isDragging, setDragging] = useState(false);
  const [isOver, setOver] = useState(false);

  const onDragStart: React.DragEventHandler<HTMLDivElement> = e => {
    const payload = JSON.stringify({ blockId, fromPath: path });

    e.dataTransfer.setData(DND_BLOCK_MIME, payload);
    e.dataTransfer.setData('text/plain', blockId);
    e.dataTransfer.effectAllowed = 'move';

    setDragging(true);
    setOver(false);
    dispatch(dragStartBlock({ fromPath: path, blockId }));
  };

  const onDragEnd: React.DragEventHandler<HTMLDivElement> = e => {
    e.currentTarget.style.opacity = '';
    setDragging(false);
    setOver(false);

    dispatch(dragEndBlock());
  };

  const onDragEnter: React.DragEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
    if (!isDragging) setOver(true);
  };

  const onDragLeave: React.DragEventHandler<HTMLDivElement> = e => {
    const next = e.relatedTarget as Node | null;
    if (!next || !e.currentTarget.contains(next)) {
      setOver(false);
    }
  };

  const onDragOver: React.DragEventHandler<HTMLDivElement> = e => {
    if (!e.dataTransfer.types.includes(DND_BLOCK_MIME)) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
    if (!e.dataTransfer.types.includes(DND_BLOCK_MIME)) return;

    setOver(false);
    dispatch(dropBlock({ toPath: path, afterBlockId: blockId }));
  };

  return {
    isDragging,
    isOver,
    dndProps: {
      draggable: true,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop,
    },
  };
}
