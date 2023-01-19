import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationDesign from 'src/components/elements/svg/services/illustration-design';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';
import { IDataDesign } from 'src/services/our-service-service';

interface IDesign {
  designData: IDataDesign;
}
const Section = styled.section``;
const Contain = styled.div``;
const ContainerImage = styled.div``;
const Container = styled.div``;
const Design: FC<IDesign> = (props) => {
  const { designData } = props;

  return (
    <Section className="flex flex-col justify-center xs:text-center md:text-left">
      <Contain className="flex flex-col justify-center items-center md:flex-row">
        <ContainerImage className="flex justify-center relative mb-12 md:m-0">
          <IllustrationDesign />
        </ContainerImage>
        <Container className="w-[85%] md:max-w-xs flex justify-center flex-col md:ml-24">
          <Description
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={32}
            title={designData.titleDesign}
            content={designData.contentDesign}
            space={12}
          />
          <Box className="mt-6">
            <Button
              variant="filled"
              className="btn-custom"
              onClick={() =>
                navigation(`/our-services/${designData.linkDesign}`)
              }>
              Learn more
            </Button>
          </Box>
        </Container>
      </Contain>
    </Section>
  );
};
export default Design;
