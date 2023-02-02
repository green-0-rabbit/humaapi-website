/* eslint-disable react/require-default-props */
import { Box, Text, createStyles, TextProps } from '@mantine/core';
import { FC } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.colorScheme === 'dark' ? 'white' : ''
  }
}));
interface IDescription extends TextProps {
  title: string;
  content?: string;
  space?: number;
  mx?: string;
}
const Description: FC<IDescription> = (props) => {
  const { classes } = useStyles();

  const { title, content, space, mx } = props;
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: space, margin: mx }}>
      <Text className={`${classes.root}`} {...props}>
        {title}
      </Text>
      <Text sx={{ fontFamily: 'Ubuntu-Regular' }} size="md">
        {content}
      </Text>
    </Box>
  );
};
export default Description;
