import '../styles/globals.css';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from '@mantine/core';
import type { AppProps } from 'next/app';
import Layout from '../layouts/layout';
import themeGlobaly from 'src/components/commons/app.theming';
import { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    themeGlobaly.colorScheme!
  );
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={`${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY}`}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ ...themeGlobaly, colorScheme: colorScheme }}
          withGlobalStyles
          withNormalizeCSS>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </GoogleReCaptchaProvider>
  );
}
