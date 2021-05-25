/* Example with @emotion/react */
import tw, { css } from 'twin.macro';

const styles = Object.values({
  standard: css`
  /*-------------standard----------------*/
    font-family:'Inter';
    background: #e6e7ee;
    box-shadow: inset -1px -1px 2px #ffffff, inset 1px 1px 3px #5c5c5f;
`,
  tailwindcss: tw`
    p-4 m-1.5
    block
    font-light
    mx-auto max-w-xs
    rounded-xl
    focus:(ring-2 ring-red-400 outline-none)
  `
});

export default function BlocInset({ children, ...props }) {
  return (
    <div css={[...styles]} {...props}>
      {children}
    </div>
  );
}
