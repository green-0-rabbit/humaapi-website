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

  return (
    <Layout
      pageTitle="Contact Us"
      serviceData={serviceCardData}
      navigationData={navigationData}
      networkData={networkData}>
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
