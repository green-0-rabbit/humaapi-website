import styled from '@emotion/styled';
import { Text, Container, Box, Paper, createStyles } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';

const useStyles = createStyles((theme) => ({
  titleColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  textColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));
interface ITheRenders {
  dataTheRenders: {
    getTitle: string;
    getContent: string;
    getList: { title: string; content: string }[];
  };
}
const Section = styled('div')``;
const HeadSection = styled('div')``;
const ContainDescription = styled('div')``;
const ContainCards = styled('div')``;
const Contain = styled('div')``;
const Num = styled('div')``;
const TitleCard = styled('div')``;

const TheRenders: FC<ITheRenders> = ({ ...props }) => {
  const { classes } = useStyles();
  const { dataTheRenders } = props;

  return (
    <Section className="mx-4">
      <ContainDescription>
        <HeadSection className="text-center">
          <Description
            title={dataTheRenders.getTitle}
            content={dataTheRenders.getContent}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '24px'
            }}
            size={24}
            space={4}
          />
        </HeadSection>
      </ContainDescription>
      <ContainCards className="grid place-items-center mt-12">
        <Container className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {dataTheRenders.getList.map((el, index) => (
            <Paper
              className="md:grid place-items-center "
              key={el.title}
              p={14}
              radius={24}
              style={{ width: 296, height: 96 }}>
              <Contain className="flex font-UbuntuRegular">
                <Num className="w-8 font-bold text-hm text-base">
                  {`${index + 1 <= 9 ? '0' : ''}${index + 1}`}
                </Num>

                <Box className="flex flex-col">
                  <TitleCard
                    className={`${classes.titleColor} text-base font-semibold`}>
                    {el.title}
                  </TitleCard>
                  <Text
                    sx={{
                      fontWeight: 500,
                      lineHeight: '16px'
                    }}
                    size="xs"
                    className={`${classes.textColor} mt-1`}>
                    {el.content}
                  </Text>
                </Box>
              </Contain>
            </Paper>
          ))}
        </Container>
      </ContainCards>
    </Section>
  );
};

export default TheRenders;
