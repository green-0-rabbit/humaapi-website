
import xw from 'xwind'
import {css} from '@emotion/react'
import Navlink from 'components/elements/Navlink'

const styles = {
  standard: css`
  /*-------------standard----------------*/
    
    background: #e6e7ee;

    @media (min-width: 640px) { 


}
 
`,
  tailwindcss: xw`
    flex justify-between
    mx-auto m-1.5
    py-8 px-8
  `
};

export default function NavBar({ children,...props}) {

  return(
    <header css={[styles.tailwindcss, styles.standard]} {...props}>
      <div>
        <Navlink target="_blank" href="#" css={[css`color:black;`, xw``]}>Company</Navlink>
      </div>
      <div css={[css`color:black;`, xw`order-last`]}>
        <Navlink target="_blank" href="#" css={[css`color:black;`, xw``]}>Company</Navlink>
        <Navlink target="_blank" css={{ color: 'black' }} >Pricing</Navlink>
        <Navlink target="_blank" css={{ color: 'black' }}>Projects</Navlink>
        <Navlink target="_blank" css={{ color: 'black' }}>Services</Navlink>
        <Navlink target="_blank" >Contact us</Navlink>
      </div>
    </header>
  )

} 
