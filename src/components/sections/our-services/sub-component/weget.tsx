import styled from '@emotion/styled';
import { Text, Container, Box, Paper, createStyles } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';

const useStyles = createStyles((theme) => ({
  titleColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  textColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));
interface IWeget {
  dataWeget: {
    getTitle: string;
    getList: { title: string; content: string }[];
  };
}
const Section = styled('div')``;
const HeadSection = styled('div')``;
const ContainDescription = styled('div')``;
const ContainCards = styled('div')``;
const Contain = styled('div')``;
const TitleCard = styled('div')``;

const Weget: FC<IWeget> = ({ ...props }) => {
  const { classes } = useStyles();
  const { dataWeget } = props;

  return (
    <Section className="mx-4">
      <ContainDescription>
        <HeadSection className="text-center">
          <Description
            title={dataWeget.getTitle}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '24px'
            }}
            size={24}
          />
        </HeadSection>
      </ContainDescription>
      <ContainCards className="grid place-items-center mt-10">
        <Container className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {dataWeget.getList.map((el, index) => (
            <Paper
              className="md:grid place-items-center"
              key={el.title}
              p={14}
              radius={24}
              style={{ width: 296, height: 96 }}>
              <Box className="flex" sx={{ fontFamily: 'Ubuntu-Regular' }}>
                <Text
                  className="w-8 font-bold text-base mr-2"
                  color="humaapi.0">
                  {`${index + 1 <= 9 ? '0' : ''}${index + 1}`}
                </Text>

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
                    lineClamp={3}
                    className={`${classes.textColor} mt-1`}>
                    {el.content}
                  </Text>
                </Box>
              </Box>
            </Paper>
          ))}
        </Container>
      </ContainCards>
    </Section>
  );
};

export default Weget;
