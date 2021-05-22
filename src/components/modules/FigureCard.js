/* eslint-disable import/no-unresolved */
import tw, { css } from 'twin.macro';
import BlocRidge from '@elements/BlocRidge';
import BlocInset from '@elements/BlocInset';
import anime from 'animejs';
import { useRef, useEffect } from 'react';

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

export default function FigureCard({
  number, symbol, text, color, ...props
}) {
  const Testref = useRef(null);
  useEffect(() => {
    anime({
      targets: Testref.current,
      duration: 2000,
      innerText: [0, parseFloat(number, 10)],
      easing: 'easeOutQuad',
      round: 100
    });
    return () => { };
  });
  return (
    <BlocRidge css={[tw` flex flex-col justify-center text-center`]} {...props}>
      <div css={[tw`text-6xl pt-2 font-normal `, css`min-width:180px; max-width:180px;`]}>
        {symbolFunction(symbol) === 'left' ? (
          <>
            <span>{symbol}</span>
          </>
        ) : null}
        <span ref={Testref} />
        {symbolFunction(symbol) === 'right' ? (
          <>
            <span>{symbol}</span>
          </>
        ) : null}
      </div>
      <p css={[tw`font-thin overflow-ellipsis`, css`max-width:180px;`]}>
        {text}
      </p>
      <BlocInset css={[tw`mx-14 py-2.5`, colorFunction(color)]} />
    </BlocRidge>
  );
}
