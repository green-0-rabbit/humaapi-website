import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';

interface IHeadCookie {
  title: string;
  description: string;
  subTitle: string;
}
const Title = styled.div``;
const TitleContain = styled.div``;
const HeaderCookie = styled.div``;
const HeadCookie: FC<IHeadCookie> = ({ ...props }) => {
  const { title, description, subTitle } = props;
  return (
    <HeaderCookie className="grid h-[70vh] place-items-center px-9 xs:text-center md:text-left">
      <TitleContain className="mx-auto max-w-xl text-center">
        <Text
          color="humaapi.0"
          className="text-xl font-bold"
          sx={{
            fontFamily: 'Ubuntu-Regular'
          }}>
          {title}
        </Text>
        <Title className="text-center">
          <Description
            title={subTitle}
            content={description}
            space={3}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={32}
          />
        </Title>
      </TitleContain>
    </HeaderCookie>
  );
};
export default HeadCookie;
