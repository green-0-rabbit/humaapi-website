import { Button } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

interface IButton {
  link: string;
  content: string;
}
const ButtonCustom: FC<IButton> = (props) => {
  const { link, content } = props;
  return (
    <Link href={link}>
     <Button
      className="btn-custom"
      radius="xl"
       >
      {content}
    </Button>
    </Link>
     );
};
export default ButtonCustom;
