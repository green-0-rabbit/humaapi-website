import '../styles/globals.css';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  MantineThemeOverride
} from '@mantine/core';
import type { AppProps } from 'next/app';
import appTheme from 'src/commons/app.theming';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { css, Global } from '@emotion/react';
import { NotificationsProvider } from '@mantine/notifications';
import CookieConsent from 'src/components/modules/cookie-consent';
import CustomFonts from 'src/commons/app.fonts';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'humaapi-color-scheme',
    defaultValue: appTheme.colorScheme ?? 'light',
    getInitialValueInEffect: true
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={`${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY}`}>
      <Global
        styles={css`
          .grecaptcha-badge {
            display: none;
          }
          .cookie-though {
            --ct-primary-400: #ea6f66;
            --ct-text: #0e0e0e;
            --ct-button-radius: 30px;
            --ct-button-secondary: #e0e0e0;
            --ct-button-secondary-color: #383838;
            --ct-button-padding: 10px 14px 10px 14px;
            --ct-policy-text: #000;
            --ct-slider-secondary: #b1b1b1;
            --ct-slider-primary: #747474;
            --ct-slider-enabled-primary: #ffffff54;
            --ct-slider-enabled-secondary: #ffffff;
            --ct-policy-essential: #ffebea;
          }
        `}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ ...appTheme, colorScheme } as MantineThemeOverride}
          withGlobalStyles
          withNormalizeCSS>
          <NotificationsProvider position="top-right" zIndex={2077}>
            <CookieConsent>
              <CustomFonts />
              <Component {...pageProps} />
            </CookieConsent>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </GoogleReCaptchaProvider>
  );
}
