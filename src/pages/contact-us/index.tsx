import { GetStaticProps } from 'next';
import { FC } from 'react';
import ContactForm from 'src/components/sections/contact-us/contact-form';
import Layout from 'src/layouts/layout';
import {
  INavigationFooterData,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';

interface IContactUs {
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: INavigationFooterData[];
}

const ContactUs: FC<IContactUs> = (props) => {
  const { navigationHeaderData, navigationFooterData } = props;

  return (
    <Layout
      pageTitle="Contact Us"
      navigationHeaderData={navigationHeaderData}
      navigationFooterData={navigationFooterData}>
      <ContactForm />
    </Layout>
  );
};
export default ContactUs;
export const getStaticProps: GetStaticProps = async () => {
  const navigationHeaderData = await navigationService.getHeader();
  const navigationFooterData = await navigationService.getFooter();

  return {
    props: {
      navigationHeaderData,
      navigationFooterData
    }
  };
};
