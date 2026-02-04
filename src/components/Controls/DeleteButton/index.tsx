import clsx from 'clsx';

import styles from './styles.module.scss';
import { BaseButton } from '../../Common';

type Props = {
  withBorder?: boolean;
  className?: string;
  onClick: () => void;
};

export function DeleteButton({
  className,
  onClick,
  withBorder = true,
  ...props
}: Props) {
  return (
    <BaseButton
      onClick={onClick}
      className={clsx(styles.btn, { [styles.border]: withBorder }, className)}
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
