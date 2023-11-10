import { GetStaticProps } from 'next';
import { FC } from 'react';
import ContactForm from 'src/components/sections/contact-us/contact-form';
import Layout from 'src/layouts/layout';
import {
  INavigation,
  navigationService
} from 'src/services/navigation-service';
import {
  IDataServiceCard,
  OurServicesService
} from 'src/services/our-service-service';

interface IContactUs {
  serviceCardData: IDataServiceCard;
  navigationData: INavigation[];
}

const ContactUs: FC<IContactUs> = (props) => {
  const { serviceCardData, navigationData } = props;

  return (
    <Layout
      pageTitle="Contact Us"
      serviceData={serviceCardData}
      navigationData={navigationData}>
      <ContactForm />
    </Layout>
  );
};
export default ContactUs;
export const getStaticProps: GetStaticProps = async () => {
  const serviceCardData = await OurServicesService.getServiceCard();
  const navigationData = await navigationService.getAll();

  return {
    props: {
      serviceCardData,
      navigationData
    }
  };
};
