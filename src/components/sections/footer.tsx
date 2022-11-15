import { createStyles, Container, Anchor, Group} from '@mantine/core';
import Copywritting from '../elements/illustrations/copywritting-icon'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react';
import TwitterLogo from '../elements/illustrations/twitter-logo';
import LinkedinLogo from '../elements/illustrations/linkedin-logo';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
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
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Copywritting text='2022 humaapi'/>
      <div className=' order-first lg:order-last  md:order-last sm:order-first'>
<Group className={`${classes.links} flex flex-col flex-wrap items-center md:flex-row`}>{items}
      <div className='grid grid-cols-2 gap-1'>
        <LinkedinLogo />
       <TwitterLogo />
      </div>
            </Group>
      </div>
      
      </Container>
    </div>
  );
}
export default Footer;
