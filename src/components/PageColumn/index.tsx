import clsx from 'clsx';

import { Page } from '../Page';
import styles from './styles.module.scss';
import { getChildMeta } from './utils.ts';
import { type PageNode, type Side } from '../../types.ts';

type Props = {
  node: PageNode;
  side?: Side;
  layoutClassName?: string;
};

export function PageColumn({ node, side, layoutClassName }: Props) {
  const children = node.children ?? [];
  const rowClassName =
    side === 'left'
      ? styles.rowLeftChild
      : side === 'right'
        ? styles.rowRightChild
        : null;

  return (
    <div
      className={clsx(
        styles.pageColumn,
        layoutClassName && styles[layoutClassName]
      )}
    >
      {rowClassName && (
        <div className={rowClassName}>
          <div />
          <div />
        </div>
      )}
      <Page title={node.title} side={side} />
      {!!children.length && (
        <>
          <div className={styles.manyChild}>
            <div />
            {children[1] && <div />}
          </div>
          <div className={styles.pageSubpage}>
            {children.map((child, idx) => {
              const meta = getChildMeta(idx, children.length);

              return (
                <PageColumn
                  key={child.id}
                  node={child}
                  side={meta.side}
                  layoutClassName={meta.layoutClassName}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
