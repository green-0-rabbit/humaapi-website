import { Button, ButtonProps } from '@mantine/core';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IButton extends ButtonProps {
  link: string;
  content: string;
  action?(args?:any):any
}

const ButtonCustom: FC<IButton> = (props) => {
  const { link, content, action } = props;
  return (
    <Link href={link} >
     <Button
      className="btn-custom"
      radius="xl"
      onClick={action}
      {...props}
       >
      {content}
    </Button>
    </Link>
     );
};
export default ButtonCustom;
