import styled from "@emotion/styled";
import { Text } from "@mantine/core";
import Description from "src/components/modules/description";
import HearderBanner from "../hearder-banner";

const TitleSection = ()=>{
    const Title = styled.div``;
    const TitleContain = styled.div``;
  const HearderBannerContain = styled.div``;

return(
    <HearderBanner size="h-[35vh] xs:h-[62vh] md:h-[60vh]">
        <HearderBannerContain className="grid h-[70vh] place-items-center px-9 xs:text-center md:text-left">
          <TitleContain className="text-center">
            <Text
              color={'#EA6F66'}
              className="font-UbuntuRegular font-normal text-sm">
              Our services
            </Text>
            <Title className="text-center">
              <Description
                title={'Cover every aspect of your project with our services'}
                content={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
                classe={'common-description-home'}
                space={3}
              />
            </Title>
          </TitleContain>
        </HearderBannerContain>
      </HearderBanner>
    
)
}
export default TitleSection