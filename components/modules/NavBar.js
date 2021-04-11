
import xw from 'xwind'
import { css } from '@emotion/react'
import Navlink from 'components/elements/Navlink'
import { useState } from 'react';




const styles = {
  standard: css`
  /*-------------standard----------------*/
    background: #e6e7ee;
    @media (min-width: 640px) { 
}
 
`,
  tailwindcss: xw`
    mx-auto m-1.5
    py-2 px-2
  `
};

const stylesLinkButton = Object.values({
  standard: css`
    color :black;
`,
  tailwindcss: xw`
  md:m-auto
`


});

const stylesLinkGroup = Object.values({
  standard: css`
  color:black; 
  transition: height 2s;
`,
  tailwindcss: xw`
  order-last flex flex-col md:flex-row
  md:space-x-3
  text-center  
`
});
const stylesNav = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  flex flex-col md:flex-row justify-between
   space-y-5 md:space-y-0  
`
});

const stylesBrandToggle = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  flex text-center flex-row justify-between md:order-first
`
});

const stylesBrand = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  order-first md:m-auto
`
});
const stylesToggle = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  order-last my-auto md:hidden
`
});

export default function NavBar({ children, ...props }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState('hidden');


  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsHidden(isOpen ? 'visible' : 'hidden');
  };

  return (
    <header css={[styles.tailwindcss, styles.standard]} {...props}>
      <nav css={[...stylesNav]}>
        <div css={[...stylesBrandToggle]}>
          <div css={[...stylesBrand]}>
            <Navlink target="_blank" href="#" imgName='headerLogo.png' />
          </div>
          <div css={[...stylesToggle]} onClick={() => handleClick()} >
            <button >{isOpen ? 'true' : 'false'}</button>
          </div>
        </div>
        <div css={[...stylesLinkGroup]}>
          <Navlink target="_blank" href="#" css={[...stylesLinkButton]}>Company</Navlink>
          <Navlink target="_blank" css={[...stylesLinkButton]}>Pricing</Navlink>
          <Navlink target="_blank" css={[...stylesLinkButton]}>Projects</Navlink>
          <Navlink target="_blank" css={[...stylesLinkButton]}>Services</Navlink>
          <Navlink target="_blank" css={[xw`md:m-auto`]}>Contact us</Navlink>
        </div>
      </nav>
    </header>
  )

}
