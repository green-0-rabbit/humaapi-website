/* eslint-disable import/no-unresolved */
/* Example with @emotion/react */
import tw, { css } from 'twin.macro';
import BlocOutset from '@elements/BlocOutset';
import BlocInset from '@elements/BlocInset';

export default function BlocRidge({ children, ...props }) {
  return (
    <BlocOutset css={[tw`p-0.5`, css`min-width:250px; min-height:200px;`]} {...props}>
      <BlocInset css={[tw`p-8 m-auto`]}>
        {children}
      </BlocInset>
    </BlocOutset>
  );
}
