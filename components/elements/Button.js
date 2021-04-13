/* Example with @emotion/react */
import xw from 'xwind'
import { css } from '@emotion/react'


const styles = {
  standard: css`
  /*-------------standard----------------*/
    font-family:'Bahnschrift';
    font-weight:lighter;
    color: #EA6F66;
    background: #e6e7ee;
    box-shadow: 2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;
/*----------------hover---------------*/
   :hover {
    background-color:#EA6F66;
    color: white;
  }
  /*------------active-----------------*/
  :active {
    box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);
    outline: none;
}
 /*------------active-hover-----------------*/
:active:hover
{
  box-shadow: inset -2px -2px 4px #ffffff91, inset 2px 2px 4px #767677cc;
}

`,
  tailwindcss: xw`
    m-1.5
    py-1 px-4
    border-transparent
    text-xl font-light leading-normal
    items-center
    rounded-2xl
    focus[outline-none] 
  `
}

export default function Button({ children,...props}) {
  return(
  <button css={[styles.tailwindcss, styles.standard]} {...props}>
    {children}
  </button>
  )

} 
