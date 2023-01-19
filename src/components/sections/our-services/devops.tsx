import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationDevops from 'src/components/elements/svg/services/illustration-devops';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';
import { IDataDevops } from 'src/services/our-service-service';

interface IDevOps {
  devopsData: IDataDevops;
}
const Contain = styled.div``;
const ContainerImage = styled.div``;
const Section = styled.section``;
const DevOps: FC<IDevOps> = (props) => {
  const { devopsData } = props;

  return (
    <Section className="flex flex-col justify-center xs:text-center md:text-left">
      <Contain className="flex flex-col justify-center items-center md:flex-row">
        <Box className="w-[85%] md:max-w-xs flex justify-center flex-col md:mr-14  order-last md:order-first">
          <Description
            title={devopsData.titleDevops}
            content={devopsData.contentDevops}
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
              onClick={() =>
                navigation(`/our-services/${devopsData.linkDevops}`)
              }>
              Learn more
            </Button>
          </Box>
        </Box>
        <ContainerImage className="flex justify-center relative mb-12 md:m-0">
          <IllustrationDevops />
        </ContainerImage>
      </Contain>
    </Section>
  );
};
export default DevOps;
