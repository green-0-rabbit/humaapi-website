/* eslint-disable import/no-unresolved */
/* Example with @emotion/react */
import tw from 'twin.macro';
import BlocOutset from '@elements/BlocOutset';
import Img from 'react-optimized-image';

export default function Hublot({ imgRelPath, ...props }) {
  return (
    <div css={[tw`flex justify-center text-center rounded-full bg-white`]}>
      <BlocOutset css={[tw` px-8 py-6 m-3 rounded-full`]} {...props}>
        <Img
          priority="true"
          src={require(`public/images/${imgRelPath}`)}
          sizes={[60, 150]}
          webp
          breakpoints={[768, 769]}
          alt="humaapi logo"
        />
      </BlocOutset>
    </div>
  );
}
