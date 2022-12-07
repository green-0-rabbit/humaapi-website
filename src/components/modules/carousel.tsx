import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';

interface ITemplateCarousel {
  classeCarrousel: string;
  children: ReactNode;
  dotSpace:string;
gridCol:string
}
const TemplateCarousel: FC<ITemplateCarousel> = (props) => {
  const { classeCarrousel, children,dotSpace,gridCol} = props;
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
      className={`${classeCarrousel}`}
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
            transform: `translateY(${dotSpace}px)`
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
            gridTemplateColumns: `repeat(${gridCol}, 1fr)`,
            placeItems: 'center'
          }
        },
        indicator: {
          width: 12,
          height: 10,
          transition: 'width 250ms ease'
        }
      }}>
      {children}
    </Carousel>
  );
};
export default TemplateCarousel;