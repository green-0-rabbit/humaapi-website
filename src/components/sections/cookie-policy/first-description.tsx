import styled from '@emotion/styled';
import Description from 'src/components/modules/description';

const Title = styled.div``;
const FirstDescription = () => (
  <Title className="text-center mx-auto max-w-xl">
    <Description
      title="What does the term “cookies” or “tracers” cover?"
      content="Tracers are deposited and read, for example, when consulting a website, reading an e-mail, installing or using software or a mobile application, regardless of regardless of the type of terminal used, such as a computer, a smartphone, a digital reader and a video game console connected to the Internet.
        They may involve the transmission of information, either between you and us, or to a third party on our part or to a third party in accordance with its own privacy policy.
        Cookies are managed by your internet browser. You can configure your device so that it informs you each time a cookie is sent to you. You can also choose to disable all cookies. You can do this in your browser settings. Please see the last part for more information on how to manage or disable browser cookies."
      sx={{
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 700,
        lineHeight: '36px'
      }}
      size={32}
      space={6}
    />
  </Title>
);
export default FirstDescription;
