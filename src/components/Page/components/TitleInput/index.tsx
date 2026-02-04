import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function TitleInput({ value, onChange }: Props) {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  return (
    <input
      ref={inputRef}
      className={styles.input}
      value={value}
      readOnly={!isEditing}
      onClick={() => setEditing(true)}
      onChange={e => onChange(e.target.value)}
      onBlur={() => setEditing(false)}
      onKeyDown={e => {
        if (e.key === 'Enter') setEditing(false);
      }}
      onMouseDown={e => e.stopPropagation()}
      onDragStart={e => e.preventDefault()}
    />
  );
}
