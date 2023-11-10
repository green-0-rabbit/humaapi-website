/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import apolloClient from 'src/utils/wps/apollo-client';

interface ICookie {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  cookiePolicy: string;
  listCookies: string;
}
export type IDataCookiePolicy = NonUndefined<
  Required<ReturnTypeAsync<typeof cookieService.get>>
>;

export const cookieService = {
  get: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfCookiePolicy();
      const res = acfAcfPage?.acfCookieFields;
      if (acfAcfPage && res) {
        const data = {
          id: acfAcfPage.id as string,
          title: res.title as string,
          subTitle: res.subTitle as string,
          description: res.description as string,
          cookiePolicy: res.cookiePolicy as string,
          listCookies: res.listCookies as string
        };
        return data as ICookie;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
