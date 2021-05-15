/* Example with @emotion/react */
import tw, { css } from 'twin.macro';
// eslint-disable-next-line import/no-unresolved
import data from 'static_data/Home/home-card.data.json';

const frData = data.find((row) => row.language === 'en');
const styles = {
  standard: css`
  /*-------------standard----------------*/
    font-family:'Bahnschrift';
    font-weight:lighter;
    background: #e6e7ee;

    @media (min-width: 640px) { 
      box-shadow: 2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
}
 
`,
  tailwindcss: tw`
    block 
    mx-auto m-1.5 max-w-xs
    py-10 px-5
    border-transparent rounded-2xl
    focus[outline-none] 
  `
};

export default function Card({ children, ...props }) {
  return (
    <div css={[styles.tailwindcss, styles.standard]} {...props}>
      <div css={[tw`text-center sm:text-left`]}>
        <h2 css={[css`font-weight:bolder;`, tw`block text-2xl`]}>
          {frData.content.title}
        </h2>
        <h3 css={[css`font-weight:200;`, tw`block text-xl`]}>
          {frData.content.subtitle}
        </h3>
        <br />
        <p css={[css`font-weight:100;`, tw`block mb-7`]}>
          {frData.content.text}
        </p>
      </div>
      <div css={[tw`text-center`]}>
        {children}
      </div>
    </div>
  );
}
