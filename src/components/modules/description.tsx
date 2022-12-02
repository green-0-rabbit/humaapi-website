import { Box, Text } from '@mantine/core';
import { FC } from 'react';
import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  root: {
    color: theme.colorScheme === 'dark' ? "white" :""
  }
  
}))
interface IDescription {
  title: string;
  content: string;
  classe: string;
  space: number;
}
const Description: FC<IDescription> = (props) => {
  const { classes} = useStyles();

  const { title, content, classe, space } = props;
  return (
    <Box className={`grid gap-${space}`}>
      <Text className={`${classe} ${classes.root}`}>{title}</Text>
      <Text className="font-UbuntuRegular text-sm font-light">{content} </Text>
    </Box>
  );
};
export default Description;
