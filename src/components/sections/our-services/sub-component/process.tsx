/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Text, Container, Paper, createStyles, Box } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import Description from 'src/components/modules/description';
import CarouselOursServices from '../carousel-our-services';

const useStyles = createStyles((theme) => ({
  titleColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  textColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));

interface IProcess {
  dataProcess: {
    processTitle: string;
    processList: { title: string; content: string }[];
  };
  icons: { icon: JSX.Element }[];
}
// icon: JSX.Element; text: string;
const Section = styled('div')``;
const HeadSection = styled('div')``;
const ContainDescription = styled('div')``;
const ContainCards = styled('div')``;
const Contain = styled('div')``;
const Icon = styled('div')``;
const TitleCard = styled('div')``;

const Process: FC<IProcess> = ({ ...props }) => {
  const { dataProcess, icons } = props;
  const { classes } = useStyles();

  return (
    <Section>
      <ContainDescription className="mx-auto">
        <HeadSection className="text-center">
          <Description
            title={dataProcess.processTitle}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={24}
          />
        </HeadSection>
      </ContainDescription>
      <ContainCards className="mt-10 hidden md:flex md:justify-center">
        <Container className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dataProcess.processList.map((el, index) => (
            <Paper
              className="place-items-start md:grid"
              radius={20}
              key={index}
              style={{ width: 280, height: 173 }}>
              <Box
                className="grid grid-cols-1 gap-1"
                sx={{ fontFamily: 'Ubuntu-Regular' }}>
                <Icon>{icons[index].icon}</Icon>
                <TitleCard
                  className={`text-base font-semibold ${classes.titleColor}`}>
                  {el.title}
                </TitleCard>
                <Text
                  sx={{ fontWeight: 500, lineHeight: '16px' }}
                  size="xs"
                  className={` mt-1 ${classes.textColor}`}
                  lineClamp={4}>
                  {el.content}
                </Text>
              </Box>
            </Paper>
          ))}
        </Container>
      </ContainCards>

      <CarouselOursServices data={dataProcess.processList} icons={icons} />
    </Section>
  );
};

export default Process;
