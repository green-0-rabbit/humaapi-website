/* eslint-disable import/no-unresolved */
/* Example with @emotion/react */
import tw, { css } from 'twin.macro';
import BlocOutset from '@elements/BlocOutset';
import BlocInset from '@elements/BlocInset';

export default function BlocRidge({ children, ...props }) {
  return (
    <BlocOutset css={[tw`p-0.5 flex  justify-center items-center`, css`min-width:200px; min-height:200px;`]} {...props}>
      <BlocInset css={[tw`p-12 m-0 text-center`, css`min-width:250px; max-width:250px;`]}>
        {children}
      </BlocInset>
    </BlocOutset>
  );
}
