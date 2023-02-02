/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import camelcaseKeys from 'camelcase-keys';
import { DeepRequired } from 'react-hm-dynamic-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';

interface INavigationHeader {
  id: string;
  navigation_link: string;
  navigation_title: string;
}
interface IFooterSection {
  id: string;
  footer_section: string;
}

export type INavigationHeaderData = Required<
  DeepRequired<ReturnTypeAsync<typeof navigationService.getHeader>>
>[0];
export type IDataNavigationFooter = Required<
  DeepRequired<ReturnTypeAsync<typeof navigationService.getFooter>>
>[0];

export const navigationService = {
  getHeader: async () => {
    try {
      const { data } = await hmDirectus.readByQuery<INavigationHeader>({
        fields: `#graphql
            {      
              id
              navigation_title
              navigation_link
              }
          `,
        queryName: 'navigation_header'
      });

      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<INavigationHeader[]>,
          {
            deep: true
          }
        );
      }
      return [];
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getFooter: async () => {
    try {
      const { data } = await hmDirectus.readByQuery<IFooterSection>({
        fields: `#graphql
            {      
              id
              footer_section
            }
          `,
        queryName: 'navigation_footer'
      });

      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IFooterSection[]>,
          {
            deep: true
          }
        );
      }
      return [];
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
