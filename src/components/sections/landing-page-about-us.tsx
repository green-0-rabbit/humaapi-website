import styled from '@emotion/styled';
import AboutusImage from '../../../public/assets/img/pexels-diva-plavalaguna-6147029.jpg';

import Description from 'src/components/modules/description';
import Image from 'next/image';

const LandingAboutUs = () => {
  const Contain = styled.div``;
  const Container = styled.div``;
  const ImageContain = styled.div``;
 
  return (
    <Container className="h-screen grid place-items-center mt-3 text-center md:text-left px-2">
      <Contain className="grid px-2 grid-cols-1 place-items-center gap-10 md:gap-2 max-w-lg md:max-w-2xl lg:max-w-[50rem] md:grid-cols-2">
        <Description
          title={'About us'}
          content={
            ' We are a team of growth hacker and designer. We create astonishing digital contents coupled with automation in order to sky rocket your turnover and ROI.'
          }
          classe={'common-description-home'}
          space={4}
        />
        <ImageContain className="order-first md:order-last">
          <Image
            src={AboutusImage}
            alt={'AboutusImage'}
            className="object-cover object-center rounded-[50px] h-[313px] w-[279px] border-4 border-white shadow-lg shadow-[#eee]"
          />
        </ImageContain>
      </Contain>
    </Container>
  );
};
export default LandingAboutUs;
