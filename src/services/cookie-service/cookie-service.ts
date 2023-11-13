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
}

interface IListCookie {
  id: string;
  name: string;
  category: string;
  domain: string;
  purpose: string;
  storage: string;
}
export type IDataCookiePolicy = NonUndefined<
  Required<ReturnTypeAsync<typeof cookieService.get>>
>;
export type IDataListCookie = NonUndefined<
  Required<ReturnTypeAsync<typeof cookieService.getList>>
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
          cookiePolicy: res.cookiePolicy as string
        };
        return data as ICookie;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getList: async () => {
    try {
      const { acfListCookies } = await apolloClient.acfListCookiesList();
      const res = acfListCookies?.nodes;
      if (acfListCookies && res) {
        const data = res.map((val) => ({
          id: val.id,
          name: val.name,
          category: val.description,
          domain: val.acfListCookieFields?.domain,
          purpose: val.acfListCookieFields?.purpose,
          storage: val.acfListCookieFields?.storage
        }));

        return data as IListCookie[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
