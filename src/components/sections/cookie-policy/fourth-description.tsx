import styled from '@emotion/styled';
import Description from 'src/components/modules/description';

const Title = styled.div``;
const FourthDescription = () => (
  
    <Title className="text-center max-w-xl mx-auto">
      <Description
        title="Disabling/enabling cookies through your browser"
        content="There are a number of ways you can manage cookies and other tracking technologies. You can accept or decline cookies by changing your browser settings, or have your browser ask you for confirmation before accepting a cookie from the websites you visit. Please be aware that if you choose to disable cookies completely, you may not be able to use all of our features.
          If you use multiple computers at different locations, you will need to ensure that each browser is set to suit your preferences.
          You can delete all cookies that have been installed in your browser's cookie folder. Each browser offers different procedures for managing your settings. Click on one of the browser links below to view their guidelines.
          If you do not use any of the browsers listed above, you will need to select the “cookies” option in the “Help” function to obtain information regarding the location of your cookie folder.
          To find out more about cookies, visit the website."
        classe="common-description-home"
        space={6}
      />
    </Title>

);
export default FourthDescription;
