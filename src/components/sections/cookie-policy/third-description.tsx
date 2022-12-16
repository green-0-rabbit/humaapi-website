import styled from '@emotion/styled';
import Description from 'src/components/modules/description';

const Title = styled.div``;
const ThirdDescription = () => (
  <Title className="text-center max-w-xl mx-auto">
    <Description
      title="Are all cookies the same ?"
      content="Not exactly.
          Cookies can be different depending on their lifespan or their origin."
      classe="common-description-home"
      space={6}
    />
    <Description
      title="1. There are two types of duration for cookies:"
      content="Session cookies, which are temporary and will only be stored in the memory of your browser when it is open.
         As soon as the browser is closed, the cookie will be deleted from your history.
          Persistent cookies that have an expiration date. These cookies are not deleted when the browser is closed, but are deleted
           once the expiry date has been reached. These durations are set according to the purpose of the cookies. You can also manually delete these cookies."
      classe="description-title text-lg leading-9 font-bold"
      space={2}
    />
    <Description
      title="2. Cookies can come from different sources:"
      content="First-party cookies are created by the website you are visiting.
          Third-party cookies are created by third-party providers and placed by the website editor for different purposes."
      classe="description-title text-lg leading-9 font-bold"
      space={2}
    />
  </Title>
);
export default ThirdDescription;
