import styled from '@emotion/styled';
import { Text, Container, Box } from '@mantine/core';
import { FC } from 'react';
import Card from 'src/components/elements/brand-card';
import Description from 'src/components/modules/description';
import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  
  titleColor:{color: theme.colorScheme === 'dark' ? "white" :"#2b2b2b"},
  textColor:{color: theme.colorScheme === 'dark' ? "#afaaaa" :"#6B7280"}
  
}))


interface ITheRenders {
  dataTheRenders: {text: string,title: string} [];
}

const Section = styled('div')``;
const HeadSection = styled('div')``;
const ContainDescription = styled('div')``;
const ContainCards = styled('div')``;
const Contain = styled('div')``;
const Num = styled('div')``;
const TitleCard = styled('div')``;

const TheRenders: FC<ITheRenders> = ({ ...props }) => {
  const { classes} = useStyles();
  const { dataTheRenders } = props;
  return (
    <Section className="mx-4">
      <ContainDescription>
        <HeadSection className="text-center">
          <Description
            title={'What your get'}
            content={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
            classe={'description-title leading-9 font-bold text-[24px]'}
            space={1}
          />
        </HeadSection>
      </ContainDescription>
      <ContainCards className="grid place-items-center mt-12">
        <Container className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {dataTheRenders.map((el, index) => (
            <Card
            cardClass={"md:grid place-items-center "}
              key={index}
              p={14}
              radius={24}
              style={{ width: 296, height: 96 }}>
              <Contain className="flex font-UbuntuRegular">
                <Num className="w-8 font-bold text-hm text-base">
                  0{index + 1}
                </Num>

                <Box className="flex flex-col">
                  <TitleCard className={`${classes.titleColor} text-base font-semibold`}>
                    {el.title}
                  </TitleCard>
                  <Text className={`${classes.textColor} text-xs font-medium mt-1`}>
                    {el.text}
                  </Text>
                </Box>
              </Contain>
            </Card>
          ))}
        </Container>
      </ContainCards>
    </Section>
  );
};

export default TheRenders;
