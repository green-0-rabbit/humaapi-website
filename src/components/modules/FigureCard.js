/* eslint-disable import/no-unresolved */
/* Example with @emotion/react */
import tw, { css } from 'twin.macro';
import BlocRidge from '@elements/BlocRidge';
import BlocInset from '@elements/BlocInset';

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

export default function FigureCard({
  number, text, color, ...props
}) {
  return (
    <BlocRidge css={[tw` flex flex-col justify-center text-center`]} {...props}>
      <div css={[tw`text-7xl font-normal`]}>
        {number}
      </div>
      <p css={[tw`font-thin`]}>
        {text}
      </p>
      <BlocInset css={[tw`mx-8 py-2.5`, colorFunction(color)]} />
    </BlocRidge>
  );
}
