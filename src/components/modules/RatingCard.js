/* eslint-disable import/no-unresolved */
/* Example with @emotion/react */
import tw, { css } from 'twin.macro';
import data from 'public/json/Home/home-card.data.json';
import BlocOutset from '@components/elements/BlocOutset';

import { Img, Svg } from 'react-optimized-image';

const frData = data.find((row) => row.language === 'en');

export default function Card({
  children, imgRelPath, ratingStars = 5, current = true, ...props
}) {
  const listItems = [1, 2, 3, 4, 5].map((index) => <Svg src={require('public/images/home/Star.svg')} key={index} height="30" css={tw`pl-0.5`} fill={index <= parseInt(ratingStars, 10) ? '#f0bd19' : '#DAD9D9'} />);
  return (
    <div css={tw`inline-flex relative`}>
      <div css={tw`m-auto`}>
        <Svg
          src={require('public/images/home/CardLine.svg')}
          height="150"
          stroke="#EA6F66"
          css={[tw` absolute max-h-48`, css`bottom:27%;right:-1px;`]}
        />
      </div>
      <BlocOutset css={[tw`px-10 py-6 rounded-3xl`, css`min-width:500px;`, current ? css`` : css`background-color:#EA6F66; color:white;`]} {...props}>
        <div css={[tw`flex flex-col`]}>
          <div css={[tw`flex`]}>
            <div css={tw`flex flex-col text-center`}>
              <Img
                priority="true"
                src={require(`public/images/${imgRelPath}`)}
                sizes={[80]}
                webp
                breakpoints={[768, 769]}
                alt="customer rating"
              />
              <h2 css={[tw`text-xl text-red-800`, current ? css`` : css` color:white;`]}>
                Wilson
              </h2>
            </div>
          </div>
          <br />
          <p css={[tw` mb-4 font-light  text-justify`]}>
            {frData.content.text}
          </p>
          <div css={[tw`flex flex-row `]}>
            {listItems}
          </div>
        </div>
      </BlocOutset>
    </div>
  );
}
