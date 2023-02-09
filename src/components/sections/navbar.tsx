/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Box
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ActionButton from 'src/components/modules/action-button';
import LogoHumaapi from '../elements/svg/icons/logo-humaapi';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  customColor: {
    color: '#EA6F66'
  },
  root: {
    position: 'fixed',
    zIndex: 1,
    borderStyle: 'none',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    borderRadius: 20,
    backdropFilter: 'blur(64px)',
    background:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba('#000000', 0.4)
        : theme.fn.rgba('#ffffff', 0.4)
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
    backgroundColor: theme.colorScheme === 'dark' ? '#292727' : '#f5eeee',

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

  itemNavLink: {
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
        ? theme.colors.gray[0]
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
  itemNavLink: { navigationLink: string; navigationTitle: string }[];
}

const Navbar = ({ itemNavLink }: IHeaderResponsiveProps) => {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(router.pathname);

  const { classes, cx } = useStyles();
  const items = itemNavLink.map((el, index) => (
    <Link
      href={`/${el.navigationLink.replace('/', '')}`}
      legacyBehavior
      key={el.navigationTitle}>
      <a
        key={el.navigationTitle}
        className={`${cx(classes.link, {
          [classes.linkActive]:
            router.pathname === `/${el.navigationLink.replace('/', '')}`
        })}`}
        onClick={() => {
          setActive(router.pathname);
          close();
        }}>
        {el.navigationTitle}
      </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={`${classes.root}`}>
      <Container className={classes.header}>
        <Link href="/">
          <LogoHumaapi />
        </Link>
        <Group spacing={4} className={`${classes.itemNavLink} header-style`}>
          {items}
          <Box className="ml-8">
            <ActionButton />
          </Box>
        </Group>
        <div className="block md:hidden">
          <ActionButton />
        </div>
        <Burger
          color="#EA6F66"
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={420} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
export default Navbar;
