/* eslint-disable react/require-default-props */
import { Box, createStyles } from '@mantine/core';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import bgImage from '../../../public/assets/img/gradientcircleglassmorphism.png';

const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? '#27272730' : ''
  }
}));
interface IheaderBanner {
  children?: ReactNode;
  size?: string;
}
const HeaderBanner: FC<IheaderBanner> = ({ ...props }) => {
  const { children, size } = props;
  const { classes } = useStyles();
  return (
    <Box
      className={`${
        size ? `${size}` : 'h-screen'
      } flex items-center justify-center bg-gradient-to-b ${
        classes.root ? 'from-[#f1afaf30]' : 'from-[#fff9f9]'
      }  ${classes.root}`}>
      <Image
        priority
        src={bgImage}
        alt="backgroundImage"
        quality={40}
        className={` ${
          classes.root ? 'blur-[195px]' : 'blur-[220px]'
        } fixed object-center`}
      />
      {children}
    </Box>
  );
};

export default HeaderBanner;
