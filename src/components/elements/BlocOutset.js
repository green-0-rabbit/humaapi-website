/* Example with @emotion/react */
import tw, { css } from 'twin.macro';

const styles = Object.values({
  standard: css`
  /*-------------standard----------------*/
    font-family:'Inter';
    background: #e6e7ee;
    box-shadow: 2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
    -moz-box-shadow:2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
    -webkit-box-shadow:2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
`,
  tailwindcss: tw`
    p-4 m-1.5
    block
    font-normal
    mx-auto max-w-xs
    rounded-xl
    focus:(ring-2 ring-red-400 outline-none)
  `
});

export default function BlocOutset({ children, ...props }) {
  return (
    <div css={[...styles]} {...props}>
      {children}
    </div>
  );
}
