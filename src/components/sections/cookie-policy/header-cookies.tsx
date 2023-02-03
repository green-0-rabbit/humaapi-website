import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';

interface IHeadCookie {
  title: string;
  content: string;
}
const Title = styled.div``;
const TitleContain = styled.div``;
const HeaderCookie = styled.div``;
const HeadCookie: FC<IHeadCookie> = ({ ...props }) => {
  const { title, content } = props;
  return (
    <HeaderCookie className="h-[70vh] grid place-items-center px-9 xs:text-center md:text-left">
      <TitleContain className="text-center max-w-xl mx-auto">
        <Text
          color="humaapi.0"
          className="font-bold text-xl"
          sx={{
            fontFamily: 'Ubuntu-Regular'
          }}>
          Cookie policy
        </Text>
        <Title className="text-center">
          <Description
            title={title}
            content={content}
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
