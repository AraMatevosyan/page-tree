import clsx from 'clsx';
import { useState } from 'react';

import { Page } from '../Page';
import { ChildrenConnector } from './components';
import styles from './styles.module.scss';
import { getChildMeta, getRowClassName } from './utils.ts';
import { type Side } from '../../types.ts';

import type { PageStateNode } from '../../store/slices/pageSlice/types.ts';

type Props = {
  node: PageStateNode;
  side?: Side;
  layoutClassName?: string;
  isSingle?: boolean;
  path?: string[];
};

export function PageColumn({
  node,
  path = [],
  side,
  layoutClassName,
  isSingle,
}: Props) {
  const [isChildrenVisible, setIsChildrenVisible] = useState(true);
  const children = node.children ?? [];
  const hasChildren = children.length > 0;
  const rowClassName = getRowClassName(isSingle, side);

  const toggleChildrenVisibility = () => {
    setIsChildrenVisible(!isChildrenVisible);
  };

  return (
    <div
      className={clsx(
        styles.pageColumn,
        layoutClassName && styles[layoutClassName]
      )}
    >
      {rowClassName && (
        <div className={styles[rowClassName]}>
          <div />
          <div />
        </div>
      )}
      <Page
        title={node.title}
        side={side}
        hasChildren={hasChildren}
        isSingle={isSingle}
        isChildrenVisible={isChildrenVisible}
        toggleChildrenVisibility={toggleChildrenVisibility}
        pageBlocks={node.pageBlocks}
        isEdgeChild={false}
        path={path}
      />
      {!!children.length && isChildrenVisible && (
        <>
          <ChildrenConnector isManyChild={children.length > 0} />
          <div className={styles.pageSubpage}>
            {children.map((child, idx) => {
              const meta = getChildMeta(idx, children.length);

              return (
                <PageColumn
                  key={child.id}
                  node={child}
                  side={meta.side}
                  layoutClassName={meta.layoutClassName}
                  isSingle={meta.isSingle}
                  path={[...path, child.id]}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
