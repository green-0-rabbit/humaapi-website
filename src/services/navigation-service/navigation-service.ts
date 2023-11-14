/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
import { NonUndefined } from 'react-hook-form';
import { ReturnTypeAsync } from 'src/commons/interface';
import apolloClient from 'src/utils/wps/apollo-client';

interface INavigation {
  id: string;
  navigationTitle: string;
  navigationLink: string;
  footerTitle: string | null;
}
interface INetwork {
  id: string;
  title: string;
  link: string;
  slug: string;
  imageLight: { icon: string; name: string };
  imageDark: { icon: string; name: string };
}
export type IDataNavigation = NonUndefined<
  Required<ReturnTypeAsync<typeof navigationService.getAll>>
>;
export type IDataNetwork = NonUndefined<
  Required<ReturnTypeAsync<typeof navigationService.getNetwork>>
>;

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
          footerTitle: val.acfNavigationsFields?.footerTitle as string
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
