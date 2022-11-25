import { createStyles, Container, Group, Box} from '@mantine/core';
import Copywritting from '../elements/illustrations/logo-icon/copywritting-icon'
import styled from '@emotion/styled'
import React from 'react';
import TwitterLogo from '../elements/illustrations/logo-icon/twitter-logo';
import LinkedinLogo from '../elements/illustrations/logo-icon/linkedin-logo';

const useStyles = createStyles((theme) => ({
  footer: {
   
    [theme.fn.smallerThan('sm')]: {
      marginTop: 50,
    },
   
    [theme.fn.largerThan('sm')]: {
      marginTop: 120,
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface IFooterSimpleProps {
  texts: { text: string}[]
 }
const Text = styled.span``
const ContainLogo = styled.div``
const SecondPartFooter = styled.div``
const Footer = ({ texts }: IFooterSimpleProps) => {
  const { classes } = useStyles();
  const items = texts.map((link,index) => (
    <Text
    className='footer-style'
      key={index}
      onClick={(event) => event.preventDefault()}
    >
      {link.text}
    </Text>
  ));

  return (
    <Box className={classes.footer}>
      <Container className={classes.inner}>
      <Copywritting text='2022 humaapi'/>
      <SecondPartFooter className=' order-first lg:order-last  md:order-last sm:order-first'>
<Group className={`${classes.links} flex flex-col flex-wrap items-center md:flex-row`}>{items}
      <ContainLogo className='grid grid-cols-2 gap-1'>
        <LinkedinLogo />
       <TwitterLogo />
      </ContainLogo>
            </Group>
      </SecondPartFooter>
      
      </Container>
    </Box>
  );
}
export default Footer;
