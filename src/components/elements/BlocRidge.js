/* eslint-disable import/no-unresolved */
/* Example with @emotion/react */
import tw from 'twin.macro';
import BlocOutset from '@elements/BlocOutset';
import BlocInset from '@elements/BlocInset';

export default function BlocRidge({ children, ...props }) {
  return (
    <BlocOutset css={[tw`p-0.5`]} {...props}>
      <BlocInset css={[tw`p-10 m-auto`]}>
        {children}
      </BlocInset>
    </BlocOutset>
  );
}
