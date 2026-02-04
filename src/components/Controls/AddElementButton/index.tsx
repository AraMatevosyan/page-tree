import clsx from 'clsx';
import * as React from 'react';

import styles from './styles.module.scss';
import { BaseButton } from '../../Common';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function AddElementButton({ ...props }: Props) {
  return (
    <BaseButton className={clsx(styles.btn)} {...props}>
      +
    </BaseButton>
  );
}
