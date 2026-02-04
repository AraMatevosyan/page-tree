import clsx from 'clsx';
import * as React from 'react';

import styles from './styles.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function BaseButton({ className, onClick, children, ...props }: Props) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    onClick?.(e);
  };
  return (
    <button
      type="button"
      className={clsx(styles.btn, className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
