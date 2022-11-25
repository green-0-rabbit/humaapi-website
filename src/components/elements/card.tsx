import { Paper, PaperProps } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface ICard extends PaperProps {
  children: ReactNode;
}
const Card: FC<ICard> = (props) => {
  const { children } = props;
  return (
    <Paper radius={28} p="lg" shadow="1px 1px 30px #f3f3f3" {...props}>
      {children}
    </Paper>
  );
};
export default Card;
