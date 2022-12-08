import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationWeb from 'src/components/elements/svg/services/illustration-web';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';

interface IWebDev {
  labelBtn?: string;
}
const ContainWebDev = styled.div``;
const Contain = styled.div``;
const Container = styled.div``;
const Illustration = styled.div``;
const WebDev: FC<IWebDev> = (props) => {
  const { labelBtn } = props;

  return (
    <ContainWebDev className="px-2 grid place-items-center xs:text-center md:text-left">
      <Contain className="grid px-2 grid-cols-1 place-items-center max-w-lg md:max-w-2xl md:gap-12 lg:gap-24 lg:max-w-[50rem] md:grid-cols-6 lg:grid-cols-12">
        <Illustration className="md:col-span-4 lg:col-span-6">
          <IllustrationWeb />
        </Illustration>
        <Container className="grid gap-4 md:col-span-2 lg:col-span-5 ">
          <Description
            title={'Web developpment'}
            content={
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
            }
            classe={'common-description-home'}
            space={8}
          />
          <Box className="mt-4">
            <Button
              variant="filled"
              className="btn-custom"
              onClick={() => navigation('/our-services/web-developement')}>
              {labelBtn ? labelBtn : 'Learn more'}
            </Button>
          </Box>
        </Container>
      </Contain>
    </ContainWebDev>
  );
};
export default WebDev;
