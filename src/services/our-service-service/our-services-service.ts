/* eslint-disable import/prefer-default-export */
import camelcaseKeys from 'camelcase-keys';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';
import { getFormatedOverview } from './helper-function';

interface IGetServiceDesc {
  id: number;
  service_title: string;
  service_content: string;
  service_link: string;
  service_img: string;

  get_title: string;
  get_content: string;
  get_list: string;

  process_title: string;
  process_content: string;
  process_list: string;
}
interface IService {
  id: number;
  service_title: string;
  service_content: string;
  service_link: string;
  service_img: string;
}
export type IDataOurServiceView = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getAllServiceDes>>
>;
export type IDataServiceOurDescription = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getServiceByLink>>
>;

export const OurServicesService = {
  getAllServiceDes: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IService>({
        fields: `#graphql
              {    
                id    
                service_title
                service_content
                service_link
                service_img
              }
            `,
        queryName: 'services'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IService>,
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
  getServiceByLink: async (serviceLink: string) => {
    try {
      const { data } = await hmDirectus.readByQuery<IGetServiceDesc>({
        fields: `#graphql
            {      
          id
          service_title
          service_content
          service_link
          service_img
            get_title
            get_content
            get_list 
            process_title
            process_content
            process_list
          
            }
          `,
        filter: {
          service_link: { _eq: serviceLink }
        },
        queryName: 'services'
      });

      if (!data) {
        return undefined;
      }

      const singleValue = { ...data[0] };
      const finaleValue = {
        service_title: singleValue.service_title,
        service_content: singleValue.service_content,
        service_link: singleValue.service_link,
        service_img: singleValue.service_img,
        whatget: {
          get_title: singleValue.get_title,
          get_content: singleValue.get_content,
          get_list: getFormatedOverview(singleValue.get_list)
        },
        process: {
          process_title: singleValue.process_title,
          process_content: singleValue.process_content,
          process_list: getFormatedOverview(singleValue.process_list)
        }
      };

      return camelcaseKeys(
        finaleValue as unknown as CamelCasedPropertiesDeep<typeof finaleValue>,
        {
          deep: true
        }
      );
    } catch (err) {
      // console.error(err);
      return undefined;
    }
  },
  getPaths: async () => {
    type Path = Pick<IGetServiceDesc, 'service_link'>;
    try {
      const { data } = await hmDirectus.readByQuery<Path>({
        fields: `#graphql
            {      
              service_link
            }
          `,

        queryName: 'services'
      });

      if (!data) {
        return undefined;
      }

      const pathsConfig = data.map((post) => ({
        params: {
          id: String(post.service_link)
        }
      }));

      return pathsConfig;
    } catch (err) {
      // console.error(err);
      return undefined;
    }
  }
};
