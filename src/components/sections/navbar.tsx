import { useEffect, useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LogoHumaapi from '../elements/illustrations/logo-icon/logo-humaapi';
import Link from 'next/link';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  customColor: {
    color: '#EA6F66'
  },
  root: {
    position: 'fixed',
    zIndex: 1,
    background: theme.fn.rgba('#ffffff', 0.4),
    borderStyle: 'none',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    borderRadius: 20,
    backdropFilter: 'blur(64px)'
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    borderRadius: 18,
    backgroundColor: '#f8f8f8',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
      alignItems: 'center'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.xl,
    textDecoration: 'none',

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    },
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color: '#EA6F66'
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: '#EA6F66',
      color: 'white'
    }
  }
}));

interface IHeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const Navbar = ({ links }: IHeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const { classes, cx } = useStyles();
  const items = links.map((link) => (
    <Link href={link.link} legacyBehavior key={link.label}>
      <Text
        key={link.label}
        className={`${cx(classes.link, {
          [classes.linkActive]: active === link.link
        })}`}
        onClick={(ev:any) => {
        //  ev.preventDefault()
          setActive(link.link);
          close();
        }}>
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <>
      <Header
        height={HEADER_HEIGHT}
        ///mb={120}
        className={`${classes.root} `}>
        <Container className={classes.header}>
          <LogoHumaapi />
          <Group spacing={4} className={`${classes.links} hearder-style`}>
            {items}
          </Group>

          <Burger
            color="#EA6F66"
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />

          <Transition
            transition="pop-top-right"
            duration={420}
            mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </>
  );
};
export default Navbar;
