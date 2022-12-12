import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationMobile from 'src/components/elements/svg/services/illustration-mobile';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';

interface IMobileDev {
  labelBtn?: string;
}
const Contain = styled.div``;
const Container = styled.div``;
const Illustration = styled.div``;
const MobileDev: FC<IMobileDev> = (props) => {
  const { labelBtn } = props;

  return (
    <Container className=" grid place-items-center  xs:text-center md:text-left px-2">
      <Contain className="grid px-2 grid-cols-1 place-items-center gap-10  max-w-lg md:max-w-2xl md:gap-16 lg:gap-36 lg:max-w-[50rem] md:grid-cols-2">
        <Box className="">
          <Description
            title={'Mobile development'}
            content={
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
            }
            classe={'common-description-home'}
            space={4}
          />
          <Box className="mt-4">
            <Button
              variant="filled"
              className="btn-custom"
              onClick={() => navigation('/our-services/mobile-developement')}>
              {labelBtn ? labelBtn : 'Learn more'}
            </Button>
          </Box>
        </Box>
        <Illustration className="order-first md:order-last">
          <IllustrationMobile />
        </Illustration>
      </Contain>
    </Container>
  );
};
export default MobileDev;
