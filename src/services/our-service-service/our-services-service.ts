/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import apolloClient from 'src/utils/wps/apollo-client';

interface IService {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
  imageName: string;
}

interface IServiceCard extends IService {
  iconLight: { icon: string; name: string };
  iconDark: { icon: string; name: string };
}

export type OffersType = Array<Omit<IService, 'image' | 'imageName' | 'link'>>;
export type ProcessType = Array<Omit<IService, 'link'>>;
interface IServicesOverview extends IService {
  process: { title: string; array: ProcessType };
  offers: { title: string; array: OffersType };
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
      const { acfService } = await apolloClient.acfServiceById({
        id: serviceLink
      });
      const resOffers = acfService?.acfOffers?.nodes;
      const resProcess = acfService?.acfProcess?.nodes;
      if (acfService && resOffers && resProcess) {
        const dataOffers = resOffers.map((valOffer) => ({
          id: valOffer.id as string,
          title: valOffer.name as string,
          description: valOffer.description as string
        }));
        const dataProcess = resProcess.map((valProcess) => ({
          id: valProcess.id as string,
          title: valProcess.name as string,
          description: valProcess.description as string,
          image: valProcess.acfProcessFields?.image?.mediaItemUrl as string,
          imageName: valProcess.acfProcessFields?.image?.altText as string
        }));
        const data = {
          id: acfService.id,
          title: acfService.acfServicesFields?.title as string,
          link: acfService.slug as string,
          description: acfService.acfServicesFields?.description as string,
          image: acfService.acfServicesFields?.image?.mediaItemUrl as string,
          imageName: acfService.acfServicesFields?.image?.altText as string,
          process: {
            title: acfService.acfServicesFields?.titleProcess as string,
            array: dataProcess
          },
          offers: {
            title: acfService.acfServicesFields?.titleOffer as string,
            array: dataOffers
          }
        };
        return data as IServicesOverview;
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
          imageName: val.acfServicesFields?.image?.altText as string,
          iconLight: {
            icon: val.acfServicesFields?.iconLight?.mediaItemUrl as string,
            name: val.acfServicesFields?.iconLight?.altText as string
          },
          iconDark: {
            icon: val.acfServicesFields?.iconDark?.mediaItemUrl as string,
            name: val.acfServicesFields?.iconDark?.altText as string
          }
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
