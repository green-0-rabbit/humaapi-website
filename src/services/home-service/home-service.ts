/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import apolloClient from 'src/utils/wps/apollo-client';

interface IDomaineActivity {
  id: string;
  title: string;
  subTitle: string;
  description: string;
}
interface ILandingPage {
  id: string;
  title: string;
  description: string;
  image: string;
  imageName: string;
}
interface IOurService {
  id: string;
  title: string;
  subTitle: string;
  description: string;
}
type DomaineNodeType = Omit<ILandingPage, 'description'>;
export type IDataDomaineActivity = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getDomaine>>
>;
export type IDataLandingPage = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getLanding>>
>;
export type IDataOurService = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getService>>
>;

export type IDataDomainNodeService = NonUndefined<
  Required<ReturnTypeAsync<typeof HomeService.getDomaineNode>>
>;

export const HomeService = {
  getLanding: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfLanding();
      const res = acfAcfPage?.acfHomePageFields;
      if (acfAcfPage && res) {
        const data = {
          id: acfAcfPage.id as string,
          title: res.title as string,
          description: res.description as string,
          image: res.image?.mediaItemUrl as string,
          imageName: res.image?.altText as string
        };
        return data as ILandingPage;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },

  getService: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfService();
      const res = acfAcfPage?.acfHomePageFields?.serviceContent;
      if (acfAcfPage && res) {
        const data = {
          id: acfAcfPage.id as string,
          title: res.title as string,
          subTitle: res.subTitle as string,
          description: res.description as string
        };
        return data as IOurService;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },

  getDomaine: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfDomain();
      const res = acfAcfPage?.acfHomePageFields?.domainContent;
      if (acfAcfPage && res) {
        const data = {
          id: acfAcfPage.id as string,
          title: res.title as string,
          subTitle: res.subTitle as string,
          description: res.description as string
        };
        return data as IDomaineActivity;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },

  getPageTitle: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfLanding();
      const res = acfAcfPage?.title as string;
      return res || undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getDomaineNode: async () => {
    try {
      const { acfDomaines } = await apolloClient.acfDomainNodes();
      const res = acfDomaines?.nodes;
      if (acfDomaines && res) {
        const data = res.map((val) => ({
          id: val.id as string,
          title: val.name as string,
          image: val.acfDomaineField?.image?.mediaItemUrl as string,
          imageName: val.acfDomaineField?.image?.altText
        }));
        return data as DomaineNodeType[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
