import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationWeb from 'src/components/elements/svg/services/illustration-web';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';

interface IWebDev {
  labelBtn?: string;
}
const Section = styled.section``;
const Contain = styled.div``;
const Container = styled.div``;
const ContainerImage = styled.div``;
const WebDev: FC<IWebDev> = (props) => {
  const { labelBtn } = props;

  return (
    <Section className="flex flex-col justify-center xs:text-center md:text-left">
      <Contain className="flex flex-col justify-center items-center md:flex-row">
        <ContainerImage className="flex justify-center relative mb-12 md:m-0">
          <IllustrationWeb />
        </ContainerImage>
        <Container className="w-[85%] md:max-w-xs flex justify-center flex-col md:ml-14 ">
          <Description
            title="Web developpment"
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
              className="btn-custom"
              onClick={() => navigation('/our-services/web-developement')}>
              {labelBtn || 'Learn more'}
            </Button>
          </Box>
        </Container>
      </Contain>
    </Section>
  );
};
export default WebDev;
