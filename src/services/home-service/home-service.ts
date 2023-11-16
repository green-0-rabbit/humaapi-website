/* eslint-disable @typescript-eslint/no-explicit-any */
import apolloClient from 'src/utils/wps/apollo-client';

export interface IDomaineActivity {
  id: string;
  title: string;
  subTitle: string;
  description: string;
}
export interface ILandingPage {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageName: string;
}
export interface IOurService {
  id: string;
  title: string;
  subTitle: string;
  description: string;
}

export type IPageData = Pick<ILandingPage, 'title' | 'slug'>;
export type IDomaineNodeType = Omit<ILandingPage, 'description'>;

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

  getPageData: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfLanding();
      const res = {
        title: acfAcfPage?.title as string,
        slug: acfAcfPage?.slug as string
      } as IPageData;

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
        return data as IDomaineNodeType[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
