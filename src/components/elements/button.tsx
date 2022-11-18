import { Button } from '@mantine/core';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IButton {
  link: string;
  content?: string;
  icon?:ReactNode;
  style?:Object | any;
  action?:(()=>any);
  variant?:string;
}
const ButtonCustom: FC<IButton> = (props) => {
  const { link, content,icon,style,action } = props;
  return (
    <Link href={link}>
     <Button
      className="btn-custom"
      radius="xl"
      leftIcon={icon}
      style={style}
      onClick={action}
       >
      {content}
    </Button>
    </Link>
     );
};
export default ButtonCustom;
