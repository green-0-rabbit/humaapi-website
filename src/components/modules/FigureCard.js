/* eslint-disable import/no-unresolved */
import tw, { css } from 'twin.macro';
import BlocRidge from '@elements/BlocRidge';
import BlocInset from '@elements/BlocInset';
import anime from 'animejs';
import { useRef, useEffect, useState } from 'react';

const colorFunction = (color) => {
  switch (color) {
    case 'purple':
      return tw`bg-purple-600`;
    case 'orange':
      return css`background:#f16100;`;
    case 'saumon':
      return css`background:#EA6F66;`;
    default:
      return tw`bg-indigo-400`;
  }
};
const symbolFunction = (symbol) => {
  switch (symbol) {
    case '%':
      return 'right';
    case '+':
      return 'left';
    case 'k':
      return 'right';
    case 'm':
      return 'right';
    default:
      return 'right';
  }
};
const roundedFunction = (rounded) => {
  switch (rounded) {
    case '10':
      return 10;
    case '100':
      return 100;
    case '1000':
      return 1000;
    default:
      return true;
  }
};
export default function FigureCard({
  number, rounded, propDuration = 500, propEasing = 'linear', symbol, text, color, ...props
}) {
  const [isAutoPlay, setisAutoPlay] = useState(false);
  const Contentref = useRef(null);

  useEffect(() => {
    anime({
      targets: Contentref.current,
      duration: propDuration,
      innerText: [0, parseFloat(number)],
      easing: propEasing,
      autoplay: isAutoPlay,
      round: roundedFunction(rounded)
    });
    return () => { };
  });

  return (
    <BlocRidge onClick={() => setisAutoPlay(!isAutoPlay)} css={[tw` flex flex-col justify-center items-center text-center`]} {...props}>
      <div css={[tw`text-5xl pt-2 font-normal`, css` max-width:180px;`]}>
        {symbolFunction(symbol) === 'left' ? (
          <>
            <span>{symbol}</span>
          </>
        ) : null}
        <span ref={Contentref} />
        {symbolFunction(symbol) === 'right' ? (
          <>
            <span>{symbol}</span>
          </>
        ) : null}
      </div>
      <p css={[tw`font-thin overflow-ellipsis`]}>
        {text}
      </p>
      <BlocInset css={[tw`mx-5 py-2.5`, colorFunction(color)]} />
    </BlocRidge>
  );
}
