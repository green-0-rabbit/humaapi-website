import { GetStaticProps } from 'next';
import { FC } from 'react';
import ContactForm from 'src/components/sections/contact-us/contact-form';
import Layout from 'src/layouts/layout';
import {
  INavigation,
  INetwork,
  navigationService
} from 'src/services/navigation-service';
import {
  IServiceCard,
  OurServicesService
} from 'src/services/our-service-service';

interface IContactUs {
  serviceCardData: IServiceCard[];
  navigationData: INavigation[];
  networkData: INetwork[];
}

const ContactUs: FC<IContactUs> = (props) => {
  const { serviceCardData, navigationData, networkData } = props;
  const [navigationBySlug] = navigationData.filter(
    (val) => val.navigationLink === 'contact-us'
  );
  return (
    <Layout
      pageTitle={navigationBySlug.navigationTitle}
      serviceData={serviceCardData}
      navigationData={navigationData}
      networkData={networkData}
      pageSlug={navigationBySlug.navigationLink}>
      <ContactForm />
    </Layout>
  );
};
export default ContactUs;
export const getStaticProps: GetStaticProps = async () => {
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();
  const networkData = await navigationService.getNetwork();

  return {
    props: {
      serviceCardData,
      navigationData,
      networkData
    }
  };
};
