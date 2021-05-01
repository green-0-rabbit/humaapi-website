import xw from 'xwind';
import { css } from '@emotion/react';
import Navlink from 'components/elements/Navlink';

import React, { useState, useRef, useEffect } from 'react';

const styles = Object.values({
  standard: css`
  /*-------------standard----------------*/
    background: #e6e7ee; 
`,
  tailwindcss: xw`
    mx-auto m-1.5
    py-2 px-2
  
  `
});
const stylesLinkButton = Object.values({
  standard: css`
    color :black;
`,
  tailwindcss: xw`
  relative
  md:m-auto 
`
});
const stylesLinkGroup = Object.values({
  standard: css`
  color:black;
`,
  tailwindcss: xw`
  flex flex-col md:flex-row
  md:space-x-3 
  text-center
`
});
const stylesCollapseDefault = Object.values({
  standard: css`
  color:black; 
 
`,
  tailwindcss: xw`
  invisible overflow-hidden md:visible md:overflow-auto
  md:space-x-3 md:px-2
  text-center
  md:h-auto
  py-1.5
`
});
const stylesCollapse = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  visible overflow-hidden
  h-60 
`
});
const stylesNav = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  md:items-center
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
  const collapsedRef = useRef(null);

  useEffect(() => {
    if (collapsedRef.current) {
      console.log(collapsedRef.current.offsetHeight);
    }
  }, [collapsedRef]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header css={[...styles]} {...props}>
      <nav css={[...stylesNav]}>
        <div css={[...stylesBrandToggle]}>
          <div css={[...stylesBrand]}>
            <Navlink target="_blank" href="#" imgName="headerLogo.png" />
          </div>
          <div css={[...stylesToggle]} onClick={() => handleClick()}>
            <button>{isOpen ? 'true' : 'false'}</button>
          </div>
        </div>
        <div css={[[...stylesCollapseDefault], isOpen ? [...stylesCollapse] : css``]}>
          <div ref={collapsedRef} css={[...stylesLinkGroup]}>
            <Navlink target="_blank" href="#" css={[...stylesLinkButton]}>Company</Navlink>
            <Navlink target="_blank" css={[...stylesLinkButton]}>Pricing</Navlink>
            <Navlink target="_blank" css={[...stylesLinkButton]}>Projects</Navlink>
            <Navlink target="_blank" css={[...stylesLinkButton]}>Services</Navlink>
            <Navlink target="_blank" css={[xw`md:m-auto`]}>Contact us</Navlink>
          </div>
        </div>
      </nav>
    </header>
  );
}
