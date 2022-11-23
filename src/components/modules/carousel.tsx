import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Box,Text } from '@mantine/core';
import { Carousel, Embla } from '@mantine/carousel';
import Card from '../elements/card';

interface ITemplateCarousel {
  classe: string;
  dataCourousel: { icon: ReactNode; text: string }[];
}
const TemplateCarousel: FC<ITemplateCarousel> = (props) => {
  const { classe, dataCourousel } = props;
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
    <Box>
      <Carousel
        className={`${classe}`}
        dragFree
        slideSize="45%"
        slideGap="md"
        height={200}
        withControls={false} 
        withIndicators
        getEmblaApi={setEmbla}
        initialSlide={1}
        styles={{
          indicator: {
            width: 18,
            height: 10,
            transition: 'width 250ms ease',
            '&[data-active]': {
              width: 10,
              backgroundColor: '#EA6F66',
            },
              
          },
        }}
        >
        {dataCourousel.map((el, index) => (
          <Carousel.Slide key={index}>
              <Card
              classe={'grid gap-3  place-items-center snap-center'}
              key={index}
              styleCard={{ width: 205, height: 150, left: 288, top: 858 }}>
              {el.icon}
              <Text color={'#EA6F66'}>{el.text}</Text>
            </Card>
            </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};
export default TemplateCarousel;
