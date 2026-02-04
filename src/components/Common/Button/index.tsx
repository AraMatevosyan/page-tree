import clsx from 'clsx';
import * as React from 'react';

import styles from './styles.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function BaseButton({ className, children, ...props }: Props) {
  return (
    <button type="button" className={clsx(styles.btn, className)} {...props}>
      {children}
    </button>
  );
}
