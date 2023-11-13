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
import { FC } from 'react';
import { IDataServiceCard } from 'src/services/our-service-service';
import ParseFooter from 'src/services/navigation-service/helper-function';
import { IDataNavigation, IDataNetwork } from 'src/services/navigation-service';
import Image from 'next/image';
import { useLocalStorage } from '@mantine/hooks';
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

export interface IFooterLinksProps {
  navigationData: IDataNavigation;
  serviceData: IDataServiceCard;
  networkData: IDataNetwork;
}
const Footer: FC<IFooterLinksProps> = ({ ...props }) => {
  const { classes } = useStyles();
  const [localValue, setLocalValue] = useLocalStorage({
    key: 'humaapi-color-scheme'
  });
  const { navigationData, serviceData, networkData } = props;
  const itemFooter = ParseFooter(navigationData);

  const [homeValue] = navigationData.filter(
    (value) => value.navigationLink === 'home'
  );

  const groups = Array.from(itemFooter)
    .reverse()
    .map(([value, key]) => {
      const links = key.map((item) => {
        if (!item.footerTitle) {
          return serviceData.map((service) => (
            <Link
              key={service.id}
              className={classes.link}
              href={`/${item.navigationLink}/${service.link}`}>
              {service.title}
            </Link>
          ));
        }
        return (
          <Link
            key={item.id}
            className={classes.link}
            href={`/${item.navigationLink}`}>
            {item.navigationTitle}
          </Link>
        );
      });
      return (
        <div className={classes.wrapper} key={value}>
          <Text className={classes.title}>{value}</Text>
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
            {homeValue.footerTitle}
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
          {networkData.map((icon) => (
            <Link href={icon.link} key={icon.id} target="_blank">
              <ActionIcon size="lg" key={icon.id}>
                <Image
                  src={
                    localValue === 'dark'
                      ? icon.imageLight.icon
                      : icon.imageDark.icon
                  }
                  alt={
                    localValue === 'dark'
                      ? icon.imageLight.name
                      : icon.imageDark.name
                  }
                  className="object-cover object-center"
                  height={25}
                  width={25}
                />
              </ActionIcon>
            </Link>
          ))}
        </Group>
      </Container>
    </footer>
  );
};
export default Footer;
