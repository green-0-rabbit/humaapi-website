import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Text, Container, Paper, createStyles } from '@mantine/core';
import { FC } from 'react';
import Description from 'src/components/modules/description';
import CarouselOursServices from '../carousel-our-services';

const useStyles = createStyles((theme) => ({
  titleColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  textColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));

interface IProcess {
  dataProcess: { icon: JSX.Element; text: string; title: string }[];
}

const Section = styled('div')``;
const HeadSection = styled('div')``;
const ContainDescription = styled('div')``;
const ContainCards = styled('div')``;
const Contain = styled('div')``;
const Icon = styled('div')``;
const TitleCard = styled('div')``;

const Process: FC<IProcess> = ({ ...props }) => {
  const { classes } = useStyles();
  const { dataProcess } = props;
  return (
    <Section>
      <ContainDescription className="mx-auto">
        <HeadSection className="text-center">
          <Description
            title="Process we follow"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={24}
            space={12}
          />
        </HeadSection>
      </ContainDescription>
      <ContainCards className="flex justify-center mt-12">
        <Container className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dataProcess.map((el) => (
            <Paper
              className="hidden md:grid place-items-start"
              radius={20}
              key={el.title}
              style={{ width: 280, height: 173 }}>
              <Contain className="grid gap-1 grid-cols-1 font-UbuntuRegular">
                <Icon>{el.icon}</Icon>
                <TitleCard
                  className={`text-base font-semibold ${classes.titleColor}`}>
                  {el.title}
                </TitleCard>
                <Text
                  sx={{ fontWeight: 500, lineHeight: '16px' }}
                  size="xs"
                  className={` mt-1 ${classes.textColor}`}
                  lineClamp={4}>
                  {el.text}
                </Text>
              </Contain>
            </Paper>
          ))}
        </Container>
      </ContainCards>

      <CarouselOursServices data={dataProcess} />
    </Section>
  );
};

export default Process;
