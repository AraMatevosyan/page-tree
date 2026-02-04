import styles from '../../styles.module.scss';

export function ChildrenConnector({ isManyChild }: { isManyChild: boolean }) {
  return (
    <>
      {isManyChild ? (
        <div className={styles.oneChild}>
          <div />
        </div>
      ) : (
        <div className={styles.manyChild}>
          <div />
          <div />
        </div>
      )}
    </>
  );
}
