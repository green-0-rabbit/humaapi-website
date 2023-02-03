/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Box
} from '@mantine/core';
import Link from 'next/link';
import { INavigationFooter } from 'src/commons/interface';
import Copywritting from '../elements/svg/icons/copywritting-icon';
import LogoHumaapi from '../elements/svg/icons/logo-humaapi';
import DataService from '../content/content-data';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  wrapper: {
    width: 160
  },

  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline'
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column'
    }
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs
    }
  }
}));

interface FooterLinksProps {
  itemFooter: INavigationFooter[];
}
const Footer = ({ itemFooter }: FooterLinksProps) => {
  const { classes } = useStyles();
  const descTitle = itemFooter.find((el) => el.title === 'Description');
  const otherFooter = itemFooter.filter((el) => el.title !== 'Description');

  const groups = otherFooter.map((group) => {
    const links = (group.contentLinks as Array<any>).map((link, index) => (
      <Link
        key={link}
        className={classes.link}
        href={`${link.search('https://') !== -1 ? `${link}` : `/${link}`}`}>
        {group.contentparag[index]}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={`${classes.footer} bg-transparent`}>
      <Container className={`${classes.inner}`}>
        <div className={classes.logo}>
          <Link href="/">
            <LogoHumaapi />
          </Link>
          <Text
            size="xs"
            color="dimmed"
            className={`${classes.description}`}
            sx={{ fontFamily: 'Ubuntu-Regular' }}>
            {descTitle?.contentparag}
          </Text>
        </div>
        <Box
          className={`${classes.groups}`}
          sx={{ fontFamily: 'Ubuntu-Regular' }}>
          {groups}
        </Box>
      </Container>
      <Container className={classes.afterFooter}>
        <Copywritting text="2022 humaapi" />
        <Group spacing={4} className={classes.social} position="right" noWrap>
          {DataService.iconFooter.map((icon) => (
            <Link href={icon.link} key={icon.title} target="_blank">
              <ActionIcon size="lg" key={icon.title}>
                {icon.icon}
              </ActionIcon>
            </Link>
          ))}
        </Group>
      </Container>
    </footer>
  );
};
export default Footer;
