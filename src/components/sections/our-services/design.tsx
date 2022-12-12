import styled from '@emotion/styled';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import IllustrationDesign from 'src/components/elements/svg/services/illustration-design';
import Description from 'src/components/modules/description';
import navigation from 'src/components/features/navigation-hook';

interface IDesign {
  labelBtn?: string;
}
const ContainWebDesign = styled.div``;
const Contain = styled.div``;
const Design: FC<IDesign> = (props) => {
  const { labelBtn } = props;

  return (
    <ContainWebDesign className="grid place-items-center px-2 xs:text-center md:text-left">
      <Contain className="grid px-2 grid-cols-1 place-items-center gap-6 max-w-lg md:max-w-2xl md:gap-20 lg:max-w-[50rem] md:grid-cols-2">
        <Box className="">
          <IllustrationDesign />
        </Box>
        <Box className="space-y-10 ">
          <Description
            title={'Design'}
            content={
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
            }
            classe={'common-description-home'}
            space={8}
          />
          <Box className="mt-6">
            <Button
              variant="filled"
              className="btn-custom"
              onClick={() => navigation('/our-services/design')}>
              {labelBtn ? labelBtn : 'Learn more'}
            </Button>
          </Box>
        </Box>
      </Contain>
    </ContainWebDesign>
  );
};
export default Design;
