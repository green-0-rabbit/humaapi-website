import '../styles/globals.css';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from '@mantine/core';
import type { AppProps } from 'next/app';
import themeGlobaly from 'src/commons/app.theming';
import { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { css, Global } from '@emotion/react';
import { NotificationsProvider } from '@mantine/notifications';
import CookieConsent from 'src/components/modules/cookie-consent';
import CustomFonts from 'src/commons/app.fonts';
import Layout from '../layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
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
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CookieConsent>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </GoogleReCaptchaProvider>
  );
}
