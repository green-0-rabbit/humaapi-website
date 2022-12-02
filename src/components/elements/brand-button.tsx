import { Button, ButtonProps } from '@mantine/core';
import { FC } from 'react';

interface IBrandButton extends ButtonProps {
  content: string;
  action?(args?: any): any;
}
const BrandButton: FC<IBrandButton> = (props) => {
  const { content,action } = props;
  return (
       <Button
        radius="xl"
      styles={() => ({
        root: {
          '.mantine-Button-root': {}
        }
      })}
      onClick={action}
      {...props}>
      {content}
    </Button>
    );
};

export default BrandButton;
