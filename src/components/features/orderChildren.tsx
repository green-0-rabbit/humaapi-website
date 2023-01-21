import React, { Children, FC, ReactNode } from 'react';

interface IReorderChildren {
  id: number;
  children: ReactNode;
  className: string;
}

const ReorderChildren: FC<IReorderChildren> = ({ ...props }) => {
  const { id, children, className } = props;
  const childrens = Children.toArray(children);
  const reorderedChildren = childrens.reverse();
  return id % 2 === 0 ? (
    <div className={className}>{reorderedChildren}</div>
  ) : (
    <div className={className}>{children}</div>
  );
};
export default ReorderChildren;
