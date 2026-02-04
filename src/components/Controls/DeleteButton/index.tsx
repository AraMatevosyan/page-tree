import clsx from 'clsx';
import * as React from 'react';

import styles from './styles.module.scss';
import { BaseButton } from '../../Common';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  withBorder?: boolean;
};

export function DeleteButton({ withBorder = true, ...props }: Props) {
  return (
    <BaseButton
      className={clsx(styles.btn, { [styles.border]: withBorder })}
      {...props}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 6l12 12M18 6L6 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </BaseButton>
  );
}
