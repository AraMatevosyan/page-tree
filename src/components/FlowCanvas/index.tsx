import { useSelector } from 'react-redux';

import { PageColumn } from '../PageColumn';
import styles from './styles.module.scss';

import type { RootState } from '../../store/store.ts';

export const FlowCanvas = () => {
  const root = useSelector((s: RootState) => s.pages.root);

  return (
    <div className={styles['flow-canvas']}>
      <PageColumn node={root} />
    </div>
  );
};
