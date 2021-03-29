/* Example with @emotion/react */
import xw from 'xwind'
import { css, Global, keyframes } from '@emotion/react'


const styles = {
  standard: css`
    box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
    @media (min-width: 420px) {
      box-shadow: 5px 5px 0 0 blue, 10px 10px 0 0 red;
      }
`,
  tailwindcss: xw`
    relative
    w-64 min-w-full
    flex justify-center
    py-2 px-4
    border border-transparent
    text-sm leading-5 font-medium
    rounded-md
    text-white
    bg-gray-600
    focus[outline-none ring-4 ring-gray-400]
    active:bg-gray-700
  `
}

const ButtonTest = () => (
  <button css={[styles.tailwindcss, styles.standard]}>
    Test
  </button>

)

export default ButtonTest