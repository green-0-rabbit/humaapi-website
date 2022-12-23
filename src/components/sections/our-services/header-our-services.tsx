import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import Description from 'src/components/modules/description';

const Title = styled.div``;
const TitleContain = styled.div``;
const HeaderBannerContain = styled.div``;
const HeadOurServices = () => (
  <HeaderBannerContain className=" h-[70vh] lg:h-[73vh] grid place-items-center px-9 xs:text-center md:text-left">
    <TitleContain className="text-center">
      <Text color="#EA6F66" className="font-UbuntuRegular font-bold text-xl">
        Our services
      </Text>
      <Title className="text-center">
        <Description
          title="Cover every aspect of your project with our services"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          sx={{
            fontFamily: 'Ubuntu-Bold',
            fontWeight: 700,
            lineHeight: '36px'
          }}
          size={32}
          space={12}
        />
      </Title>
    </TitleContain>
  </HeaderBannerContain>
);
export default HeadOurServices;
