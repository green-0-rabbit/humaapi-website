/* Example with @emotion/react */
import tw, { css } from 'twin.macro';

// eslint-disable-next-line import/no-unresolved

export default function Carousel({ children, ...props }) {
  return (
    <div css={[tw` mx-auto flex justify-between items-center bg-gray-400 py-4 px-2 overflow-x-hidden max-w-lg`]} {...props}>
      {children}
    </div>
  );
}
