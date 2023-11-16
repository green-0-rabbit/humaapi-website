/* eslint-disable @typescript-eslint/no-explicit-any */
import apolloClient from 'src/utils/wps/apollo-client';

export type MetaType = Array<{
  description: string;
  imageContent: string;
}>;
export interface INavigation {
  id: string;
  navigationTitle: string;
  navigationLink: string;
  footerTitle: string | null;
  metaField: MetaType;
}
export interface INetwork {
  id: string;
  title: string;
  link: string;
  slug: string;
  imageLight: { icon: string; name: string };
  imageDark: { icon: string; name: string };
}

export const navigationService = {
  getAll: async () => {
    try {
      const { acfNavigations } = await apolloClient.acfNavigations();
      const res = acfNavigations?.nodes;

      if (res) {
        const data = res.map((val) => ({
          id: val.id as string,
          navigationTitle: val.acfNavigationsFields?.navigationTitle as string,
          navigationLink: val.slug as string,
          footerTitle: val.acfNavigationsFields?.footerTitle as string,
          metaField: [
            {
              description: val.acfNavigationsFields?.metaField?.description
                ?.content as string,
              imageContent: val.acfNavigationsFields?.metaField?.imageUrl
                ?.content as string
            }
          ] as MetaType
        }));
        return data.reverse() as INavigation[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },

  getNetwork: async () => {
    try {
      const { acfSocialNetworks } = await apolloClient.acfSocialNetworks();
      const res = acfSocialNetworks?.nodes;
      if (acfSocialNetworks && res) {
        const data = res.map((val) => ({
          id: val.id as string,
          title: val.name as string,
          link: val.acfSocialNetworkFields?.url?.url as string,
          slug: val.slug as string,
          imageLight: {
            icon: val.acfSocialNetworkFields?.iconLight?.mediaItemUrl as string,
            name: val.acfSocialNetworkFields?.iconLight?.altText as string
          },
          imageDark: {
            icon: val.acfSocialNetworkFields?.iconDark?.mediaItemUrl as string,
            name: val.acfSocialNetworkFields?.iconDark?.altText as string
          }
        }));
        return data as INetwork[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
