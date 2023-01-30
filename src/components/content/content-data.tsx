/** * sendIdData ** */
/** * processData ** */
import DeployementIcon from 'src/components/elements/svg/icons/deployment-icon';
import DevelopementIcon from 'src/components/elements/svg/icons/developement-icon';
import GatheringIcon from 'src/components/elements/svg/icons/gathering-icon';
import QualityAssuranceIcon from 'src/components/elements/svg/icons/quality-assurance-icon';
import UxUiIcon from 'src/components/elements/svg/icons/ux-ui-icon';
/** * cardData */
import DesignIcon from 'src/components/elements/svg/icons/design-icon';
import DevopsIcon from 'src/components/elements/svg/icons/devops-icon';
import MobiledevIcon from 'src/components/elements/svg/icons/mobile-icon-development';
import WebdevIcon from 'src/components/elements/svg/icons/web-icon-developement';
/** * cardDomainData */
import DemandSolutionIcon from 'src/components/elements/svg/icons/demand-solution-icon';
import EducationIcon from 'src/components/elements/svg/icons/education-icon';
import FoodRestaurantIcon from 'src/components/elements/svg/icons/food-restaurant-icon';
import HelthcareIcon from 'src/components/elements/svg/icons/healthcare-icon';
import RetailIcon from 'src/components/elements/svg/icons/icon-retail';
import LogistiqueIcon from 'src/components/elements/svg/icons/logistique-icon';
import RealStateIcon from 'src/components/elements/svg/icons/real-state-icon';
import SocialNetworkIcon from 'src/components/elements/svg/icons/social-network-icon';
import TravelHospitalIcon from 'src/components/elements/svg/icons/travel-hospital-icon';
/** * Icon team ** */
import AboubacarIcon from 'src/components/elements/svg/avatars/ab-icon';
import AurelIcon from 'src/components/elements/svg/avatars/aurel-icon';
import FreddyIcon from 'src/components/elements/svg/avatars/freddy-icon';
import GratientIcon from 'src/components/elements/svg/avatars/gratient-icon';
import SamIcon from 'src/components/elements/svg/avatars/sam-icon';
import IllustrationLandingPage from 'src/components/elements/svg/icons/illustration-landing-page';
import IllustrationDesign from '../elements/svg/services/illustration-design';
import IllustrationDevops from '../elements/svg/services/illustration-devops';
import IllustrationMobile from '../elements/svg/services/illustration-mobile';
import IllustrationWeb from '../elements/svg/services/illustration-web';

const DataService = {
  serviceSvgIllustration: [
    { img: <IllustrationMobile />, title: 'mobile-developpement' },
    { img: <IllustrationWeb />, title: 'web-developpement' },
    { img: <IllustrationDevops />, title: 'devops' },
    { img: <IllustrationDesign />, title: 'design' },
    { img: <IllustrationLandingPage />, title: '' }
  ],
  theRendersData: [
    {
      text: 'We develop your own, custom project - one & only',
      title: 'Custom development'
    },
    {
      text: 'Development of look & feel of your app on various devices',
      title: 'Mobile developement'
    },
    {
      text: 'Assurance to make sure that everything will work as planned',
      title: 'Quality assurance'
    },
    {
      text: 'Development of the backbone of your product',
      title: 'Backend development'
    },
    {
      text: 'Intuitive UX & breathtaking UI dedicated for mobile',
      title: 'UI & UX Design'
    }
  ],
  processData: [
    {
      icon: <GatheringIcon />,
      text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
      title: 'Requirement Gathering'
    },
    {
      icon: <UxUiIcon />,
      text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
      title: 'Custom development'
    },
    {
      icon: <DevelopementIcon />,
      text: 'After designing, you will get your prototype, which will be sent ahead for the development process for the product.',
      title: 'Custom development'
    },
    {
      icon: <QualityAssuranceIcon />,
      text: 'Hyperlink values quality and provides 100% bug free application with no compromisation in it.e develop your own, custom project - one & only',
      title: 'Custom development'
    },
    {
      icon: <DeployementIcon />,
      text: 'We develop your own, custom project - one & only',
      title: 'Custom development'
    }
  ],
  serviceSvgIcon: [
    { icon: <MobiledevIcon /> },
    { icon: <WebdevIcon /> },
    { icon: <DevopsIcon /> },
    { icon: <DesignIcon /> }
  ],
  cardDomainData: [
    { icon: <RetailIcon />, text: 'Retail, Ecommerce' },
    { icon: <EducationIcon />, text: 'Education & e-learning' },
    { icon: <HelthcareIcon />, text: 'Healthcare & fitness' },
    { icon: <LogistiqueIcon />, text: 'Logistique & Distribution' },
    { icon: <SocialNetworkIcon />, text: 'Social networking' },
    { icon: <RealStateIcon />, text: 'Real estate' },
    { icon: <TravelHospitalIcon />, text: 'Travel & hospitality' },
    { icon: <FoodRestaurantIcon />, text: 'Food & restaurant' },
    { icon: <DemandSolutionIcon />, text: 'On demand solutions' }
  ],
  iconTeamData: [
    {
      icon: <AurelIcon />,
      role: 'Director & CEO',
      name: 'Aurel AG'
    },
    {
      icon: <AboubacarIcon />,
      role: 'Community manager',
      name: 'Aboubakar Ta'
    },
    {
      icon: <GratientIcon />,
      role: 'Mobile developper',
      name: 'Gratien adn'
    },
    {
      icon: <FreddyIcon />,
      role: 'Developper fullstack',
      name: 'Freddy Bh'
    },
    {
      icon: <SamIcon />,
      role: 'Designer',
      name: 'Samuel  stch'
    }
  ],
  navLink: [
    { link: '/', label: 'Home' },
    { link: '/our-services', label: 'Our Services' },
    { link: '/about-us', label: 'About us' },
    { link: '/contact-us', label: 'Contact us' }
  ],
  footerLink: [
    {
      title: 'Our Services',
      links: [
        {
          label: 'Features',
          link: '#'
        },
        {
          label: 'Pricing',
          link: '#'
        },
        {
          label: 'Support',
          link: '#'
        },
        {
          label: 'Forums',
          link: '#'
        }
      ]
    },
    {
      title: 'About Us',
      links: [
        {
          label: 'Contribute',
          link: '#'
        },
        {
          label: 'Media assets',
          link: '#'
        },
        {
          label: 'Changelog',
          link: '#'
        },
        {
          label: 'Releases',
          link: '#'
        }
      ]
    },
    {
      title: 'Contact Us',
      links: [
        {
          label: 'Join Discord',
          link: '#'
        },
        {
          label: 'Follow on Twitter',
          link: '#'
        },
        {
          label: 'Email newsletter',
          link: '#'
        },
        {
          label: 'GitHub discussions',
          link: '#'
        }
      ]
    },
    {
      title: 'Cookie Policy',
      links: [
        {
          label: 'Know more about it',
          link: '/cookie-policy'
        }
      ]
    }
  ],
  cookieContentData: [
    {
      name: 'cookie-preferences',
      category: 'Essential Cookies',
      purpose:
        'Allows you to know if the user has accepted or refused the cookie policy',
      domain: 'humaapi-consulting',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-3PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes.',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    },
    {
      name: '__Secure-1PSIDCC',
      category: 'Targeting and advertising cookies',
      purpose: 'Cookie used for advertising targeting purposes',
      domain: '.google.com',
      strorageperiod: '12 Months'
    }
  ]
};

export default DataService;
