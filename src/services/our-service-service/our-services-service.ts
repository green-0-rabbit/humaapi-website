/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import camelcaseKeys from 'camelcase-keys';
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import { hmDirectus } from 'src/utils';
import { CamelCasedPropertiesDeep } from 'type-fest';
import apolloClient from 'src/utils/wps/apollo-client';
import { getFormatedOverview } from './helper-function';

interface IServicesOverview {
  id: string;
  page_title: string;
  service_title: string;
  service_description: string;
  service_link: string;
  get_title: string;
  get_list: string;
  process_title: string;
  process_list: string;
}

interface IServiceCard {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
  imageName: string;
}

interface IService {
  id: string;
  title: string;
  subTitle: string;
  description: string;
}
export type IDataDetailsService = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getByLink>>
>;
export type IDataServiceCard = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getServiceCard>>
>;

export type IServiceData = NonUndefined<
  Required<ReturnTypeAsync<typeof OurServicesService.getServiceData>>
>;

export const OurServicesService = {
  getByLink: async (serviceLink: string) => {
    try {
      const serviceData = await OurServicesService.getServiceCard();
      if (serviceLink && serviceData) {
        const [newServiceData] = serviceData.filter(
          (val) => val.link === serviceLink
        );
        return newServiceData;
      }
      throw new Error(
        `page ${serviceLink} was not found, please check the backend request`
      );
    } catch (err) {
      return undefined;
    }
  },
  getPaths: async () => {
    try {
      const { acfServices } = await apolloClient.acfServiceData();
      const res = acfServices?.nodes;
      if (res) {
        const pathsConfig = res.map((value) => ({
          params: {
            id: String(value.slug)
          }
        }));

        return pathsConfig;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getServiceCard: async () => {
    try {
      const { acfServices } = await apolloClient.acfServiceData();
      const res = acfServices?.nodes;
      if (acfServices && res) {
        const data = res.map((val) => ({
          id: val.id as string,
          title: val.acfServicesFields?.title as string,
          link: val.slug as string,
          description: val.acfServicesFields?.description as string,
          image: val.acfServicesFields?.image?.mediaItemUrl as string,
          imageName: val.acfServicesFields?.imageName as string
        }));
        return data.reverse() as IServiceCard[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getServiceData: async (id: string) => {
    try {
      const { acfAcfPage } = await apolloClient.acfService();
      if (
        id === 'our-services' &&
        acfAcfPage &&
        acfAcfPage.acfHomePageFields &&
        acfAcfPage.acfHomePageFields.serviceContent
      ) {
        const res = acfAcfPage.acfHomePageFields.serviceContent;
        const data = {
          title: res.title as string,
          subTitle: res.subTitle as string,
          description: res.description as string
        };
        return data;
      }
      throw new Error(
        `page ${id} was not found, please check the backend request`
      );
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
