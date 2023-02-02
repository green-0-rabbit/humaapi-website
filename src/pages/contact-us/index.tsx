import { GetStaticProps } from 'next';
import { FC } from 'react';
import ContactForm from 'src/components/sections/contact-us/contact-form';
import Footer from 'src/components/sections/footer';
import Navbar from 'src/components/sections/navbar';
import {
  IDataNavigationFooter,
  INavigationHeaderData,
  navigationService
} from 'src/services/navigation-service';
import { parseFooter } from 'src/services/navigation-service/helper-function';

interface IContactUs {
  navigationHeaderData: INavigationHeaderData[];
  navigationFooterData: IDataNavigationFooter[];
}

const ContactUs: FC<IContactUs> = (props) => {
  const { navigationHeaderData, navigationFooterData } = props;
  const itemFooter = parseFooter(navigationFooterData);

  return (
    <>
      <Navbar itemNavLink={navigationHeaderData} />
      <ContactForm />
      <Footer itemFooter={itemFooter} />
    </>
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
