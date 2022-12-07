import '../styles/globals.css';
import { MantineProvider,ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import type { AppProps } from 'next/app';
import Layout from '../layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark')); 
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme: colorScheme}} withGlobalStyles withNormalizeCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </MantineProvider>
    </ColorSchemeProvider>
    
  );
}
