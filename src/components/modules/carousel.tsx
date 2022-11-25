import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';

interface ITemplateCarousel {
  classeCarrousel: string;
  children: ReactNode;
}
const TemplateCarousel: FC<ITemplateCarousel> = (props) => {
  const { classeCarrousel, children } = props;
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
            backgroundColor: '#EA6F66'
          }
        }
      }}>
      {children}
    </Carousel>
  );
};
export default TemplateCarousel;
