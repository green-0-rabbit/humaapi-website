/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable consistent-return */
import apolloClient from 'src/utils/wps/apollo-client';

export interface INavigation {
  id: string;
  navigationTitle: string;
  navigationLink: string;
  footerTitle: string | null;
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
          footerTitle: val.acfNavigationsFields?.footerTitle
        }));
        return data.reverse() as INavigation[];
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
