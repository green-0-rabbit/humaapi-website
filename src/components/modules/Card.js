/* Example with @emotion/react */
import tw, { css } from 'twin.macro';
// eslint-disable-next-line import/no-unresolved
import data from 'public/json/Home/home-card.data.json';
// eslint-disable-next-line import/no-unresolved
import BlocOutset from '@components/elements/BlocOutset';

const frData = data.find((row) => row.language === 'en');

export default function Card({ children, ...props }) {
  return (
    <BlocOutset css={[tw`py-10 px-5`]} {...props}>
      <div css={[tw`text-center sm:text-left`]}>
        <h2 css={[css`font-weight:bolder;`, tw`block text-2xl`]}>
          {frData.content.title}
        </h2>
        <h3 css={[css`font-weight:200;`, tw`block text-xl`]}>
          {frData.content.subtitle}
        </h3>
        <br />
        <p css={[css``, tw`block mb-7 font-light `]}>
          {frData.content.text}
        </p>
      </div>
      <div css={[tw`text-center`]}>
        {children}
      </div>
    </BlocOutset>
  );
}
