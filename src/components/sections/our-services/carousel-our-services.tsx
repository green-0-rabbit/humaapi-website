/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Box, createStyles, Paper, Text } from '@mantine/core';
import styled from '@emotion/styled';

const useStyles = createStyles((theme) => ({
  titleColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  textColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));
interface ICarouselOursServices {
  data: {
    title: string;
    content: string;
  }[];
  icons: { icon: JSX.Element }[];
}
const Icon = styled('div')``;
const TitleCard = styled('div')``;
const CarouselOursServices: FC<ICarouselOursServices> = (props) => {
  const { data, icons } = props;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const { classes } = useStyles();

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <Carousel
      className="block md:hidden"
      dragFree
      slideSize="45%"
      slideGap="lg"
      height={210}
      withControls={false}
      withIndicators
      getEmblaApi={setEmbla}
      initialSlide={1}
      align="center"
      styles={{
        root: {
          '.mantine-Carousel-indicators': {
            transform: `translateY(25px)`
          },
          '.mantine-Carousel-indicator': {
            backgroundColor: '#e6e6e6',

            '&[data-active]': {
              width: 10,
              backgroundColor: '#EA6F66'
            }
          },
          '.mantine-Carousel-container': {
            display: 'grid',
            gridTemplateColumns: `repeat(5, 1fr)`,
            placeItems: 'center'
          }
        },
        indicator: {
          width: 12,
          height: 10,
          transition: 'width 250ms ease'
        }
      }}>
      {data.map((el, index) => (
        <Carousel.Slide key={el.title}>
          <Paper
            className="grid place-items-start"
            radius={20}
            style={{ width: 280, height: 173 }}>
            <Box
              className="grid gap-1 grid-cols-1"
              sx={{ fontFamily: 'Ubuntu-Regular' }}>
              <Icon>{icons[index].icon}</Icon>
              <TitleCard
                className={`text-base font-semibold ${classes.titleColor}`}>
                {el.title}
              </TitleCard>
              <Text
                sx={{ fontWeight: 500, lineHeight: '16px' }}
                size="xs"
                className={`mt-1 ${classes.textColor}`}
                lineClamp={4}>
                {el.content}
              </Text>
            </Box>
          </Paper>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
export default CarouselOursServices;
