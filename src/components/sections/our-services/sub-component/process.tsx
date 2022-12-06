import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Text, Container } from '@mantine/core';
import Card from 'src/components/elements/brand-card';
import { FC } from 'react';
import TemplateCarousel from 'src/components/modules/carousel';
import Description from 'src/components/modules/description';
import { createStyles } from '@mantine/core';
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
      <ContainDescription className="mx-4">
        <HeadSection className="text-center">
          <Description
            title={'Process we follow'}
            content={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
            classe={'description-title leading-9 font-bold text-[24px]'}
            space={1}
          />
        </HeadSection>
      </ContainDescription>
      <ContainCards className="grid place-items-center mt-12">
        <Container className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dataProcess.map((el, index) => (
            <Card
              cardclass={'hidden md:grid place-items-start'}
              radius={20}
              key={index}
              style={{ width: 280, height: 173 }}>
              <Contain className="grid gap-1 grid-cols-1 font-UbuntuRegular ">
                <Icon>{el.icon}</Icon>
                <TitleCard
                  className={`text-base font-semibold ${classes.titleColor}`}>
                  {el.title}
                </TitleCard>
                <Text
                  className={`text-xs font-medium mt-1 ${classes.textColor}`}
                  lineClamp={4}>
                  {el.text}
                </Text>
              </Contain>
            </Card>
          ))}
        </Container>
      </ContainCards>

      <TemplateCarousel classeCarrousel={'block md:hidden grid'} dotSpace={'25'} gridCol={'5'}>
        {dataProcess.map((el, index) => (
          <Carousel.Slide  key={index}>
            <Card
              cardclass={'grid place-items-start'}
              radius={20}
             
              style={{ width: 280, height: 173 }}>
              <Contain className="grid gap-1 grid-cols-1 font-UbuntuRegular ">
                <Icon>{el.icon}</Icon>
                <TitleCard
                  className={`text-base font-semibold ${classes.titleColor}`}>
                  {el.title}
                </TitleCard>
                <Text
                  className={`text-xs font-medium mt-1 ${classes.textColor}`}
                  lineClamp={4}>
                  {el.text}
                </Text>
              </Contain>
            </Card>
          </Carousel.Slide>
        ))}
      </TemplateCarousel>
    </Section>
  );
};

export default Process;
