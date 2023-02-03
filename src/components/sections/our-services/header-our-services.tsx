import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';
import { IDataOurService } from 'src/services/home-service';

interface IHeadOurServices {
  headerData: IDataOurService;
}
const Title = styled.div``;
const TitleContain = styled.div``;
const HeaderBannerContain = styled.div``;
const HeadOurServices: FC<IHeadOurServices> = (props) => {
  const { headerData } = props;

  return (
    <HeaderBannerContain className=" h-[70vh] lg:h-[73vh] grid place-items-center px-9 xs:text-center md:text-left">
      <TitleContain className="text-center">
        <Text
          color="humaapi.0"
          className="font-bold text-xl"
          sx={{ fontFamily: 'Ubuntu-Regular' }}>
          Our services
        </Text>
        <Title className="text-center">
          <Description
            title={headerData.titleService}
            content={headerData.contentService}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={32}
            space={12}
          />
        </Title>
      </TitleContain>
    </HeaderBannerContain>
  );
};
export default HeadOurServices;
