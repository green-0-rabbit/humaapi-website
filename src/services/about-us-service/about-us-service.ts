/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import camelcaseKeys from 'camelcase-keys';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';

interface ILandingAboutUs {
  id: number;
  title_about_us: string;
  content_about_us: string;
  about_img: {
    id: string;
  };
}
interface IOurTeam {
  id: number;
  title_team: string;
  content_team: string;
}
export type IDataLandingAboutUs = NonUndefined<
  Required<ReturnTypeAsync<typeof aboutUsService.getLanding>>
>;
export type IDataOurTeam = NonUndefined<
  Required<ReturnTypeAsync<typeof aboutUsService.getTeam>>
>;

export const aboutUsService = {
  getLanding: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<ILandingAboutUs>({
        fields: `#graphql
              {      
                title_about_us,
                content_about_us,
                about_img{
                  id
                },
              }
            `,
        queryName: 'about_us'
      });

      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<ILandingAboutUs>,
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
  },
  getTeam: async () => {
    try {
      const { data } = await hmDirectus.readByQuery<IOurTeam>({
        fields: `#graphql
              {      
                
                title_team
                content_team
              }
            `,
        queryName: 'about_us'
      });
      if (data) {
        return camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IOurTeam>,
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
