import { init, getPreferences, onPreferencesChanged } from 'cookie-though';
import { Config } from 'cookie-though/dist/types/types';
import useCookieBlocker from 'src/components/features/useCookieBlocker';
import { patterns } from 'src/utils/cookieBlocker/variables';
import { FC, ReactNode, useEffect, useState } from 'react';

interface ICookieConsent {
  children: ReactNode;
}
// This will show the Cookie though widget
// in case no preferences have been stored
const config: Config = {
  policies: [
    {
      id: 'essential',
      label: 'Essential Cookies',
      description:
        'We need to save some technical cookies, for the website to function properly.',
      category: 'essential'
    },
    {
      id: 'functional',
      label: 'Functional Cookies',
      category: 'functional',
      description: 'We need to save some basic preferences eg. language.'
    },
    {
      id: 'targeting and advertising',
      label: 'Targeting and advertising cookies',
      category: 'personalisation',
      description: 'Cookie used for advertising targeting purposes.'
    },
    {
      id: 'statistics',
      label: 'Statistics',
      category: 'statistics',
      description:
        'These cookies collect statistical information on the number and behavior of users visiting the site and their preferences.'
    }
  ],
  essentialLabel: 'Always on',
  permissionLabels: {
    accept: 'Accept',
    acceptAll: 'Accept all',
    decline: 'Decline'
  },
  cookiePreferenceKey: 'cookie-preferences',
  header: {
    title: 'Blah blah blah Cookies !',
    // subTitle: "You're probably fed up with these banners...",
    description:
      'Well ok, these cookies are neither sweet, nor chocolate, nor soft. But they allow us to know you better and to offer you content that you will love to devour. And that is worth all the cookies in the world.'
  },
  cookiePolicy: {
    url: '/cookie-policy',
    label: 'Read the full cookie declaration'
  },
  customizeLabel: 'I choose'
};

const CookieConsent: FC<ICookieConsent> = (props) => {
  const { children } = props;
  const cookieBlocker = useCookieBlocker();
  const [isMount, setIsMount] = useState(false);
  const isTrue = (value: any) => value.isEnabled === true;

  useEffect(() => {
    setIsMount(true);
    patterns!.blacklist = [];
    patterns!.whitelist = [/www\.google\.com/];
    cookieBlocker.startMonitoring();
    cookieBlocker.blockDynamicScript();
    init(config);
  }, []);

  if (isMount) {
    onPreferencesChanged((preferences) => {
      if (preferences.cookieOptions.every(isTrue)) {
        cookieBlocker.unblock();
        return;
      }
      if (preferences.cookieOptions[2].isEnabled) {
        cookieBlocker.unblock(/www\.google\.com/);
      }
    });
  }
  return <div>{children}</div>;
};

export default CookieConsent;
