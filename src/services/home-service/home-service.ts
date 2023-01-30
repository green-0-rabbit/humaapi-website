/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import camelcaseKeys from 'camelcase-keys';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';

interface IDomaineActivity {
  id: number;
  title_domaine: string;
  content_domaine: string;
}
interface ILandingPage {
  id: number;
  title_landing: string;
  content_landing: string;
  img_landing: string;
}
interface IOurService {
  id: number;
  title_service: string;
  content_service: string;
}
export type IDataDomaineActivity = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getDomaine>>
>;
export type IDataLandingPage = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getLanding>>
>;
export type IDataOurService = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getService>>
>;

export const HomeService = {
  getDomaine: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IDomaineActivity>({
        fields: `#graphql
              {      
                title_domaine,
                content_domaine
              }
            `,
        queryName: 'home'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IDomaineActivity>,
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

  getLanding: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<ILandingPage>({
        fields: `#graphql
              {      
                title_landing,
                content_landing,
                img_landing
               
              }
            `,
        queryName: 'home'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<ILandingPage>,
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
  getService: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IOurService>({
        fields: `#graphql
              {      
                title_service,
                content_service,
                
              }
            `,
        queryName: 'home'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IOurService>,
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
  }
};
