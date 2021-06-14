/* Example with @emotion/react */
/* eslint-disable import/no-unresolved */
import tw, { css } from 'twin.macro';
import data from 'public/json/Home/home-card.data.json';
import Card from '@modules/Card';
import Navlink from '@elements/Navlink';
import { Img, Svg } from 'react-optimized-image';

const frData = data.find((row) => row.language === 'en');
const imgWidth = 600;
const stylesWave = Object.values({
  standard: css`
    /*-------------standard----------------*/
    transform:scaleY(1);
    
    @media (min-width: 1024px) {transform:scaleY(1.2) translateY(30px);};
    @media (min-width: 1280px) {transform:scaleY(0.9);};
    @media (min-width: 1536px) {transform:scaleY(0.8) translateY(-60px);};
    @media (min-width:2000px) {transform:scaleY(0.6) translateY(-200px); height: 100%; width:100%;};
  `,
  tailwindCss: tw`absolute inline z-0 w-full h-auto`
});

export default function LandingSection({ children, ...props }) {
  return (
    <div css={[tw`relative py-4 `]} {...props}>
      <div css={[...stylesWave]}>
        <Svg
          src={require('public/images/home/Wave.svg')}
          css={css`fill:#EE8072;@media (min-width: 768px) {fill:#F29B8B;};transform:translateY(50px);`}
        />
      </div>
      <div css={[tw`flex items-center justify-center mx-auto`, css`max-width:1600px;`]}>
        <div css={tw`px-6 mx-auto flex-shrink-0 z-10`}>
          <Card css={tw`shadow-lg`}>
            <Navlink target="_blank">Get started</Navlink>
          </Card>
        </div>
        <div css={tw`hidden md:block mx-auto z-10 flex-shrink`}>
          <Img
            priority="true"
            src={require('public/images/services-images/Services_Social_Media.svg')}
            alt="Social Media services"
            width={`${imgWidth}px`}
            height={`${imgWidth * 0.91307}px`}
          />
        </div>
      </div>
    </div>
  );
}
