import clsx from 'clsx';
import * as React from 'react';

import styles from './styles.module.scss';
import { BaseButton } from '../../Common';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isClosed?: boolean;
  className?: string;
};

export function ToggleButton({ isClosed, className, ...props }: Props) {
  const rotate = isClosed ? 180 : 0;

  return (
    <BaseButton className={clsx(styles.btn, className)} {...props}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <path
          d="M6 9l6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </BaseButton>
  );
}
