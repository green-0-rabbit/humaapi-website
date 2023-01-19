import '../styles/globals.css';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from '@mantine/core';
import type { AppProps } from 'next/app';
import themeGlobaly from 'src/commons/app.theming';
import { FC, useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { css, Global } from '@emotion/react';
import { NotificationsProvider } from '@mantine/notifications';
import CookieConsent from 'src/components/modules/cookie-consent';
import CustomFonts from 'src/commons/app.fonts';
import { GetStaticProps } from 'next';
import {
  INavigationHeaderData,
  navigationHeaderService
} from 'src/services/navigation-service/navigation-header-service';
import Layout from '../layouts/layout';

interface IApp {
  navigationHeaderData: INavigationHeaderData;
  Component: AppProps;
  pageProps: AppProps;
}
const App: FC<IApp> = ({ ...props }) => {
  const { navigationHeaderData, Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    themeGlobaly.colorScheme!
  );
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={`${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY}`}>
      <Global
        styles={css`
          .grecaptcha-badge {
            display: none;
          }
        `}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ ...themeGlobaly, colorScheme }}
          withGlobalStyles
          withNormalizeCSS>
          <NotificationsProvider position="top-right" zIndex={2077}>
            <CookieConsent>
              <CustomFonts />
              <Layout navigationHeader={navigationHeaderData}>
                <Component {...pageProps} />
              </Layout>
            </CookieConsent>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </GoogleReCaptchaProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const navigationHeaderData = await navigationHeaderService.getAll();
  //console.log('navigationHeader', navigationHeaderData);

  // const cookiePolicyContent = await cookieService.get();
  return {
    props: {
      navigationHeaderData
    }
  };
};

export default App;
