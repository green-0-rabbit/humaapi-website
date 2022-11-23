import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import ButtonCustom from 'src/components/elements/button';
import IllustrationMobile from 'src/components/elements/illustrations/illustration/illustration-mobile';
import Description from 'src/components/modules/description';

const MobileDev = () => {
  const Contain = styled.div``;
  const Container = styled.div``;
   const Illustration = styled.div``;

  return (     
      <Container className='grid place-items-center md:mt-16 xs:text-center md:text-left px-9'>
      <Contain className="grid grid-cols-1 place-items-center gap-10  max-w-lg md:max-w-2xl md:gap-16 lg:gap-36 lg:max-w-[50rem] md:grid-cols-2">
        <Box className="space-y-10">
          <Description
            title={'Mobile development'}
            content={ 
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
            }
            classe={'common-description-home'}
            space={4}
          />
          <Box className="mt-4">
            <ButtonCustom link={'/'} content={'Learn more'} />
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
