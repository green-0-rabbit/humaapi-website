/* Example with @emotion/react */
/* eslint-disable import/no-unresolved */
import tw, { css } from 'twin.macro';
import data from 'public/json/Home/home-card.data.json';
import Card from '@modules/Card';
import Navlink from '@elements/Navlink';
import { Img, Svg } from 'react-optimized-image';

const frData = data.find((row) => row.language === 'en');
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
    <div css={[tw`flex justify-between items-center py-4`]} {...props}>

      <div css={tw`px-6 mx-auto flex-shrink-0 z-10`}>
        <Card css={[tw` shadow-lg `, [...styles]]}>
          <Navlink target="_blank">Get started</Navlink>
        </Card>
      </div>
      <div css={tw`hidden md:block `}>
        <Img
          priority="true"
          src={require('public/images/services-images/Services_Social_Media.svg')}
          sizes={[400, 500, 600, 700, 900]}
          webp
          breakpoints={[768, 960, 1024, 1280]}
          alt="humaapi logo"
        />
        {/* <Svg
          src={require('public/images/services-images/Services_Social_Media.svg')}
          css={[css`height:800px;`]}
        /> */}
      </div>
      <Svg
        src={require('public/images/home/Wave.svg')}
        css={[tw`absolute z-0 w-screen h-auto md:hidden`]}
      />
    </div>
  );
}
