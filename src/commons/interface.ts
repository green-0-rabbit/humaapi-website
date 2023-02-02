/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ReturnTypeAsync<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

export interface JobTag {
  type: string;
  value: string;
}

export enum Color {
  white = 'white',
  black = 'black'
}
export interface INavigationFooter {
  title: string;
  contentparag: string | string[];
  contentLinks: string | string[];
}
interface IDataFooter {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}
