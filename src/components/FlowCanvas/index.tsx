import { mockTree } from '../../mocks/tree';
import { PageColumn } from '../PageColumn';
import styles from './styles.module.scss';

export const FlowCanvas = () => {
  return (
    <div className={styles['flow-canvas']}>
      <PageColumn node={mockTree} />
    </div>
  );
};
