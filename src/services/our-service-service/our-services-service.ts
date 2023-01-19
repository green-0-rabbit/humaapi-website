/* eslint-disable import/prefer-default-export */
import camelcaseKeys from 'camelcase-keys';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';

interface IMobileDev {
  id: number;
  title_mobile: string;
  content_mobile: string;
  link_mobile: string;
}
interface IWebDev {
  id: number;
  title_web: string;
  content_web: string;
  link_web: string;
}
interface IDevops {
  id: number;
  title_devops: string;
  content_devops: string;
  link_devops: string;
}
interface IDesign {
  id: number;
  title_design: string;
  content_design: string;
  link_design: string;
}
interface IService {
  id: number;
  service_title: string;
  service_content: string;
  service_link: string;
  service_img: string;
}
export type IDataService = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getAll>>
>;
export type IDataMobileDev = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getMobileDev>>
>;
export type IDataWebDev = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getWebDev>>
>;
export type IDataDevops = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getDevops>>
>;

export type IDataDesign = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getDesign>>
>;

export const OurServicesService = {
  getAll: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IService>({
        fields: `#graphql
              {      
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

  getMobileDev: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IMobileDev>({
        fields: `#graphql
              {      
                title_mobile,
                content_mobile
                link_mobile
              }
            `,
        queryName: 'our_services'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IMobileDev>,
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
  getWebDev: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IWebDev>({
        fields: `#graphql
              {      
                title_web,
                content_web,
                link_web
               
              }
            `,
        queryName: 'our_services'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IWebDev>,
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
  getDevops: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IDevops>({
        fields: `#graphql
              {      
                title_devops,
                content_devops, 
                link_devops
                
              }
            `,
        queryName: 'our_services'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IDevops>,
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
  getDesign: async () => {
    try {
      const { data } = await hmDirectus.readSingleton<IDesign>({
        fields: `#graphql
              {      
                title_design,
                content_design,
                link_design
                
              }
            `,
        queryName: 'our_services'
      });

      if (data) {
        const res = camelcaseKeys(
          data as unknown as CamelCasedPropertiesDeep<IDesign>,
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
