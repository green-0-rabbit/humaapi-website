import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import Description from 'src/components/modules/description';

const Title = styled.div``;
const TitleContain = styled.div``;
const HeaderCookie = styled.div``;
const HeadCookie = () => (
  <HeaderCookie className="h-[70vh] grid place-items-center px-9 xs:text-center md:text-left">
    <TitleContain className="text-center max-w-xl mx-auto">
      <Text color="#EA6F66" className="font-UbuntuRegular font-bold text-xl">
        Cookie policy
      </Text>
      <Title className="text-center">
        <Description
          title="Cover every aspect of your project with our services"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          space={3}
          sx={{
            fontFamily: 'Ubuntu-Bold',
            fontWeight: 700,
            lineHeight: '36px'
          }}
          size={32}
        />
      </Title>
    </TitleContain>
  </HeaderCookie>
);
export default HeadCookie;
