/* Example with @emotion/react */
/* eslint-disable import/no-unresolved */
import tw, { css } from 'twin.macro';
import data from 'public/json/Home/home-card.data.json';
import Card from '@modules/Card';
import Navlink from '@elements/Navlink';
import { Img, Svg } from 'react-optimized-image';

const frData = data.find((row) => row.language === 'en');
const imgWidth = 600;
const styles = Object.values({
  standard: css`
    /*-------------standard----------------*/
    @media (min-width: 768px) { 
      box-shadow: 2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
      -moz-box-shadow:2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
      -webkit-box-shadow:2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
    }
  `
});

export default function LandingSection({ children, ...props }) {
  return (
    <div css={[tw`flex justify-between items-center py-4 relative`]} {...props}>

      <div css={tw`px-6 mx-auto flex-shrink-0 z-10`}>
        <Card css={[tw` shadow-lg `, [...styles]]}>
          <Navlink target="_blank">Get started</Navlink>
        </Card>
      </div>
      <div css={tw`hidden md:block z-10`}>
        <Img
          priority="true"
          src={require('public/images/services-images/Services_Social_Media.svg')}
          sizes={[400, 500, 600, 700, 900]}
          breakpoints={[768, 960, 1024, 1280]}
          alt="Social Media services"
          width={`${imgWidth}px`}
          height={`${imgWidth * 0.91307}px`}
        />
      </div>
      <div css={[tw`absolute z-0 w-full h-auto xl:h-full xl:`]}>
        <Svg
          src={require('public/images/home/Wave.svg')}
        />
      </div>
    </div>
  );
}
