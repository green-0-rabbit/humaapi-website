import { Button, ButtonProps } from '@mantine/core';
import { FC } from 'react';

interface IBrandButton extends ButtonProps {
  content: string;
  onClick?(args?: any): any;
  //action:((link:any)=>any)
}
const BrandButton: FC<IBrandButton> = ({ ...props }) => {
  const { content, onClick } = props;
  return (
    <Button
      radius="xl"
      styles={() => ({
        root: {
          '.mantine-Button-root': {}
        }
      })}
      onClick={onClick}
      {...props}>
      {content}
    </Button>
  );
};

export default BrandButton;
