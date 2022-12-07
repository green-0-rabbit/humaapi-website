import { Box, Paper, PaperProps } from '@mantine/core';
import { FC, ReactNode } from 'react';

import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  root: {
    background: theme.colorScheme === 'dark' ? "#3d3d3d" :"",
  },
  schadow: {
    boxShadow: theme.colorScheme === 'dark' ? '' : ('1px 1px 30px #f3f3f3')
  }
  
}))
interface ICard extends PaperProps {
  children: ReactNode;
  cardclass:string
}
const BrandCard: FC<ICard> = (props) => {
  const { children,cardclass } = props;
  const { classes} = useStyles();
   return (
      <Paper radius={28} p="lg" 
         className={`${classes.root} ${cardclass} ${classes.schadow}`}
       {...props}>
      {children}
    </Paper>
    
    
  );
};
export default BrandCard;
