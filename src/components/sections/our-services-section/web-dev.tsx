import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import ButtonCustom from 'src/components/elements/button';
import IllustrationWeb from 'src/components/elements/illustrations/illustration/illustration-web';
import Illustrationmobile from 'src/components/elements/illustrations/illustration/illustration-mobile';
import Description from 'src/components/modules/description';

const WebDev = () => {
  const ContainWebDev = styled.div``;
  const Contain = styled.div``;
  const Container = styled.div``;
  const Illustration = styled.div``;

  return (
    <ContainWebDev className="px-9 grid place-items-center xs:text-center md:text-left">
      <Contain className="grid grid-cols-1 place-items-center max-w-lg md:max-w-2xl md:gap-12 lg:gap-24 lg:max-w-[50rem] md:grid-cols-6 lg:grid-cols-12">
              <Illustration className='md:col-span-4 lg:col-span-6'>
              <IllustrationWeb />
                </Illustration>
                <Container className="grid gap-4 md:col-span-2 lg:col-span-5 ">
                  <Description
                  title={'Web developpment'}
                  content={
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
                  }
                  classe={
                    'common-description-home'
                  } 
                  space={8}
                />
                <Box className="mt-4"><ButtonCustom link={'/'} content={'Learn more'} /></Box>
                </Container>
                  </Contain>
    </ContainWebDev>
  );
};
export default WebDev;

