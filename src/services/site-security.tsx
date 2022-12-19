import camelcaseKeys from 'camelcase-keys';
import { CamelCasedPropertiesDeep } from 'type-fest';
export interface ISiteVerify {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

export const siteSecurityService = {
  checkIfHuman: async (token: string) => {
    try {
      const res = await fetch(`api/vsIntegrityCheck`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
      });

      const serializedRes = (await res.json()) as ISiteVerify;
      const data = camelcaseKeys(
        serializedRes as CamelCasedPropertiesDeep<ISiteVerify>,
        { deep: true }
      );
      return data;
    } catch (err) {
      console.log(err);
      
    }
  }
};
