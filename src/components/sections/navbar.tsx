import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LogoHumaapi from '../elements/illustrations/logo-humaapi';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  customColor: {
    color: '#EA6F66'
  },
  root: {
    position: 'fixed',
    zIndex: 1,
    background: theme.fn.rgba('#ffffff', 0.4),
    borderStyle:'none',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
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
      display: 'none'
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
    '&:hover': {
      color: '#EA6F66'
    }
  },

  linkActive: {
    '&, &:hover': {
       backgroundColor: '#EA6F66',
       color:'white'
      }
  }
}));

interface IHeaderResponsiveProps {
  links: { link: string; label: string }[];
}

const Navbar = ({ links }: IHeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[links.length - 1].link);
  const { classes, cx } = useStyles();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${cx(classes.link, {
        [classes.linkActive]: active === link.link
      })}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}>
      {link.label}
    </a>
  ));

  return (
    <Header
      height={HEADER_HEIGHT}
      ///mb={120}
      className={`${classes.root} rounded-[30px]`}>
      <Container className={classes.header}>
        <LogoHumaapi />
        <Group spacing={4} className={`${classes.links} hearder-style  items-center`}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
export default Navbar;
