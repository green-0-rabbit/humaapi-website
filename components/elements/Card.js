/* Example with @emotion/react */
import xw from 'xwind'
import {css} from '@emotion/react'
import data from 'static_data/Home/home-card.data.json'

const frData = data.find(row =>row.language ==="en");
const styles = {
  standard: css`
  /*-------------standard----------------*/
    font-family:'Bahnschrift';
    font-weight:lighter;
    background: #e6e7ee;
    box-shadow: 2px 2px 5px #5c5c5f, -3px -3px 7px #ffffff;

`,
  tailwindcss: xw`
    container
    mx-auto m-1.5
    py-1 px-4
    border-transparent
    rounded-2xl
    focus[outline-none] 
  `
};

export default function Card({ children,...props}) {

  return(
  <div css={[styles.tailwindcss, styles.standard] } {...props}>

    <h2 css={css`font-weight:bolder;`}> {frData.content.title}</h2>
    <h3  css={css`font-weight:100;`}> {frData.content.subtitle}</h3>
    <p css={css`font-weight:100;`}>
    {frData.content.text}
    </p>
    {children}
  </div>
  )

} 
