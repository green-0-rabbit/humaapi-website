/** * sendIdData ** */
/** * processData ** */
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
/** Other icons */
import IllustrationLandingPage from 'src/components/elements/svg/icons/illustration-landing-page';
import DeploymentIcon from 'src/components/elements/svg/icons/deployment-icon';
import IllustrationDesign from '../elements/svg/services/illustration-design';
import IllustrationDevops from '../elements/svg/services/illustration-devops';
import IllustrationMobile from '../elements/svg/services/illustration-mobile';
import IllustrationWeb from '../elements/svg/services/illustration-web';
import LinkedinLogo from '../elements/svg/icons/linkedin-logo';
import TwitterLogo from '../elements/svg/icons/twitter-logo';
import Behance from '../elements/svg/icons/behance';
import Github from '../elements/svg/icons/github';
import Dribbble from '../elements/svg/icons/dribbble';
import UserResearch from '../elements/svg/icons/user-research';
import InteractionDesign from '../elements/svg/icons/intera-design';
import Testing from '../elements/svg/icons/testing';
import InfoArchitecture from '../elements/svg/icons/info-architecture';
import Assement from '../elements/svg/icons/assement';
import Implementation from '../elements/svg/icons/implementation';
import Training from '../elements/svg/icons/training';
import Integration from '../elements/svg/icons/integration';
import Maintenance from '../elements/svg/icons/maintenance';

const DataService = {
  serviceSvgIllustration: [
    { img: <IllustrationMobile />, title: 'mobile-development' },
    { img: <IllustrationWeb />, title: 'web-development' },
    { img: <IllustrationDevops />, title: 'devops' },
    { img: <IllustrationDesign />, title: 'design' },
    { img: <IllustrationLandingPage />, title: '' }
  ],
  processData: [
    {
      service: 'mobile-development',
      data: [
        { icon: <GatheringIcon /> },
        { icon: <UxUiIcon /> },
        { icon: <DevelopementIcon /> },
        { icon: <Testing /> },
        { icon: <DeploymentIcon /> }
      ]
    },
    {
      service: 'web-development',
      data: [
        { icon: <GatheringIcon /> },
        { icon: <UxUiIcon /> },
        { icon: <DevelopementIcon /> },
        { icon: <QualityAssuranceIcon /> },
        { icon: <DeploymentIcon /> }
      ]
    },

    {
      service: 'devops',
      data: [
        { icon: <Assement /> },
        { icon: <Implementation /> },
        { icon: <Training /> },
        { icon: <Integration /> },
        { icon: <Maintenance /> }
      ]
    },
    {
      service: 'design',
      data: [
        { icon: <UserResearch /> },
        { icon: <InfoArchitecture /> },
        { icon: <InteractionDesign /> },
        { icon: <UxUiIcon /> },
        { icon: <Testing /> }
      ]
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
  ],
  iconFooter: [
    {
      icon: <LinkedinLogo />,
      title: 'linkedin',
      link: 'https://www.linkedin.com/company/humaapi-sarl/'
    },
    {
      icon: <TwitterLogo />,
      title: 'twitter',
      link: 'https://twitter.com/humaapi'
    },
    { icon: <Github />, title: 'github', link: 'https://github.com/humaapi' },
    {
      icon: <Dribbble />,
      title: 'dribbble',
      link: 'https://dribbble.com/Humaapi'
    },
    {
      icon: <Behance />,
      title: 'behance',
      link: 'https://www.behance.net/hm-humaapi'
    }
  ]
};

export default DataService;
