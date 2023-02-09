/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import camelcaseKeys from 'camelcase-keys';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';

interface ICookiePolicy {
  id: number;
  title: string;
  content: string;
  description_field: string;
}
interface ICookieTitle {
  page_title: string;
}
interface ICookie {
  id: number;
  name: string;
  purpose: string;
  strorage_period: string;
  domain: string;
  category: string;
}
export type IDataCookiePolicy = NonUndefined<
  Required<ReturnTypeAsync<typeof cookieService.get>>
>;
export type ICookieManagementData = NonUndefined<
  Required<ReturnTypeAsync<typeof cookieService.getCookies>>
>;
export type ICookieTitleData = NonUndefined<
  Required<ReturnTypeAsync<typeof cookieService.getTitle>>
>;

export const cookieService = {
  get: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<ICookiePolicy>({
        fields: `#graphql
              {      
                title
                content
                description_field
              }
            `,
        queryName: 'cookie_policy'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<ICookiePolicy>,
          {
            deep: true
          }
        );
        return res;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getTitle: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<ICookieTitle>({
        fields: `#graphql
              {      
                page_title
               
              }
            `,
        queryName: 'cookie'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<ICookieTitle>,
          {
            deep: true
          }
        );
        return res;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getCookies: async () => {
    try {
      const { data } = await hmDirectus.readByQuery<ICookie>({
        fields: `#graphql
              {      
                id
                name
                purpose
                strorage_period
                domain
                category
              }
            `,
        queryName: 'cookie_management'
      });
      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<ICookie>,
          {
            deep: true
          }
        );
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
