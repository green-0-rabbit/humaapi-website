import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationMobile from 'src/components/elements/svg/services/illustration-mobile';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';

interface IMobileDev {
  labelBtn: string;
}
const Contain = styled.div``;
const Section = styled.section``;
const ContainerImage = styled.div``;
const MobileDev: FC<IMobileDev> = (props) => {
  const { labelBtn } = props;

  return (
    <Section className=" flex flex-col justify-center xs:text-center md:text-left ">
      <Contain className=" flex flex-col justify-center items-center md:flex-row">
        <Box className="w-[85%] md:max-w-xs flex justify-center flex-col md:mr-14  order-last md:order-first">
          <Description
            title="Mobile development"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!"
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={32}
            space={12}
          />
          <Box className="mt-6">
            <Button
              variant="filled"
              className="btn-custom mt-4"
              onClick={() => navigation('/our-services/mobile-developement')}>
              {labelBtn || 'Learn more'}
            </Button>
          </Box>
        </Box>
        <ContainerImage className="flex justify-center relative mb-12 md:m-0">
          <IllustrationMobile />
        </ContainerImage>
      </Contain>
    </Section>
  );
};
export default MobileDev;
