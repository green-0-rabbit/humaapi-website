/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import apolloClient from 'src/utils/wps/apollo-client';

export interface ILandingAboutUs {
  id: string;
  title: string;
  teamTitle: string;
  description: string;
  image: string;
  imageName: string;
}
export type ArrayTeam = Array<Omit<ILandingAboutUs, 'teamTitle'>>;
export interface IAboutUS extends ILandingAboutUs {
  team: ArrayTeam;
}

export const aboutUsService = {
  getTeam: async () => {
    try {
      const { acfCharacters } = await apolloClient.AcfCharacters();
      const res = acfCharacters?.nodes;
      if (acfCharacters && res) {
        const data = res.map((val) => ({
          id: val.id as string,
          title: val.name as string,
          description: val.description as string,
          image: val.acfCharacterFields?.image?.mediaItemUrl as string,
          imageName: val.acfCharacterFields?.image?.altText as string
        }));
        return data as ArrayTeam;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getAll: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfAboutUs();
      const res = acfAcfPage?.acfAboutUsFields;
      const teamData = await aboutUsService.getTeam();
      if (acfAcfPage && res && teamData) {
        const data = {
          id: acfAcfPage.id as string,
          title: res.title as string,
          teamTitle: res.teamTitle as string,
          description: res.description as string,
          image: res.aboutUsImage?.mediaItemUrl as string,
          imageName: res.aboutUsImage?.altText as string,
          team: teamData
        };
        return data as IAboutUS;
      }
      return undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  },
  getPageTitle: async () => {
    try {
      const { acfAcfPage } = await apolloClient.acfAboutUs();
      const title = acfAcfPage?.title as string;
      return title || undefined;
    } catch (err) {
      const error = <any>err;
      throw new Error(error.message);
    }
  }
};
