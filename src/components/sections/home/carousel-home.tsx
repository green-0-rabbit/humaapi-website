/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import Link from 'next/link';
import { Paper, Text } from '@mantine/core';
import { IDataServiceCard } from 'src/services/our-service-service';

interface ICarouselHome {
  data: IDataServiceCard[];
  icons: { icon: JSX.Element }[];
}
const CarouselHome: FC<ICarouselHome> = (props) => {
  const { data, icons } = props;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

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
            transform: `translateY(12px)`
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
            gridTemplateColumns: `repeat(4, 1fr)`,
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
        <Carousel.Slide key={el.serviceLink}>
          <Link href={`our-services/${el.serviceLink}`}>
            <Paper
              className="flex flex-col items-center justify-center space-y-4"
              style={{ width: 205, height: 150 }}>
              {icons[index].icon}
              <Text color="humaapi.0">{el.serviceTitle}</Text>
            </Paper>
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
export default CarouselHome;
