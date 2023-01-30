/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import camelcaseKeys from 'camelcase-keys';
import { DeepRequired } from 'react-hm-dynamic-form';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';

interface IDirectusNavigationFooter {
  id: string;
  navigation_link: string;
  navigation_title: string;
}

export type INavigation = Required<
  DeepRequired<ReturnTypeAsync<typeof navigationService.getAll>>
>[0];

export const navigationService = {
  getAll: async () => {
    type PartialType = Omit<IDirectusNavigationFooter, ''>;
    try {
      const { data } = await hmDirectus.readByQuery<PartialType>({
        fields: `#graphql
            {      
              id
              navigation_title
              navigation_link
              }
          `,
        filter: {
          _and: [
            {
              navigation_link: {
                _neq: 'contact-us'
              }
            }
          ]
        },
        queryName: 'navigation_footer'
      });
      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<PartialType[]>,
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
  getByID: async (id: string) => {
    type PartialType = Pick<IDirectusNavigationFooter, 'navigation_link'>;
    try {
      const res = await hmDirectus.readOneByID<PartialType>({
        fields: `#graphql
              {      
                hero_title,
                hero_description,
                hero_image{
                  id
                },
                hero_image_description,
              }
            `,
        queryName: 'navigations',
        id
      });

      const data = {
        ...res.data
        //  hero_image: res.data?.navigation_link!
      };

      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<typeof data>,
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
