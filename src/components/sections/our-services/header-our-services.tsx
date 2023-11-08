import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';
import { IServiceData } from 'src/services/our-service-service';

interface IHeadOurServices {
  pageData: IServiceData;
}
const Title = styled.div``;
const TitleContain = styled.div``;
const HeaderBannerContain = styled.div``;
const HeadOurServices: FC<IHeadOurServices> = (props) => {
  const { pageData } = props;

  return (
    <HeaderBannerContain className=" grid h-[70vh] place-items-center  xs:text-center md:text-left lg:h-[73vh]">
      <TitleContain className="text-center">
        <Text
          color="humaapi.0"
          className="text-xl font-bold"
          sx={{ fontFamily: 'Ubuntu-Regular' }}>
          {pageData.title}
        </Text>
        <Title className="text-center">
          <Description
            title={pageData.subTitle}
            content={pageData.description}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            sxdesc="px-4"
            size={32}
            space={12}
          />
        </Title>
      </TitleContain>
    </HeaderBannerContain>
  );
};
export default HeadOurServices;
