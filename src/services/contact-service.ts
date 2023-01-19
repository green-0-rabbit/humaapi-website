import { siteSecurityService } from './site-security';

export interface IContactdata {
  name: string;
  email: string;
  company: string;
  domaine: string;
  message: string;
  acceptCondition: boolean;
  captchaToken: string;
  recaptchaCheckbox: boolean;
}

export const contactService = {
  sendMail: async (data: IContactdata) => {
    interface IResponse {
      message: string;
      error?: 'bot' | 'timeout' | string;
    }
    try {
      const { captchaToken, ...rest } = data;
      const checkResponse = await siteSecurityService.checkIfHuman(
        captchaToken
      );

      if (checkResponse && checkResponse.success) {
        if (checkResponse.score && checkResponse.score < 0.5) {
          const message = 'bot';
          throw new Error(message);
        }
        const res = await fetch(`api/contact-us`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(rest)
        });
        const serializedRes = (await res.json()) as IResponse;
        console.log(serializedRes);
        return serializedRes;
      }
      if (checkResponse && !checkResponse.success && checkResponse.errorCodes) {
        const name =
          checkResponse.errorCodes[0] === 'timeout-or-duplicate'
            ? 'timeout'
            : 'other';
        throw new Error(name);
      }
      return undefined;
    } catch (err) {
      console.log(err);
    }
  }
};
export default contactService;
