import clsx from 'clsx';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Page } from '../Page';
import { ChildrenConnector } from './components';
import styles from './styles.module.scss';
import { getChildMeta, getRowClassName } from './utils.ts';
import { getNodeByPath } from '../../store/slices/pageSlice/utils.ts';
import { type Side } from '../../types.ts';

import type { RootState } from '../../store/store.ts';

type Props = {
  side?: Side;
  layoutClassName?: string;
  isSingle?: boolean;
  isEdgeChild?: boolean;
  path?: string[];
};

export const PageColumn = memo(
  ({ path = [], side, layoutClassName, isSingle, isEdgeChild }: Props) => {
    const [isChildrenVisible, setIsChildrenVisible] = useState(true);

    const node = useSelector((s: RootState) => {
      return getNodeByPath(s.pages.root, path);
    });

    if (!node) return null;

    const children = node.children ?? [];
    const hasChildren = children.length > 0;
    const rowClassName = getRowClassName(isSingle, side);

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
          toggleChildrenVisibility={() => setIsChildrenVisible(v => !v)}
          pageBlocks={node.pageBlocks}
          isEdgeChild={isEdgeChild}
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
                    side={meta.side}
                    layoutClassName={meta.layoutClassName}
                    isSingle={meta.isSingle}
                    isEdgeChild={meta.isEdgeChild}
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
);
