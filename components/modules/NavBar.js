import xw from 'xwind';
import { css } from '@emotion/react';
// eslint-disable-next-line import/no-unresolved
import Navlink from 'components/elements/Navlink';
import useResizeObserver from '@react-hook/resize-observer';

// eslint-disable-next-line object-curly-newline
import React, { useState, useRef, useEffect } from 'react';

const useSize = (target) => {
  const [size, setSize] = useState();

  useEffect(() => {
    if (target) {
      setSize(target.current.getBoundingClientRect());
    }
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};
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
  h-0 md:h-full
  text-center
  py-1.5
`
});
const stylesCollapsed = Object.values({
  standard: css`
`,
  tailwindcss: xw`
  visible overflow-hidden
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
  const [collapsedHeight, setCollapsedHeight] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const collapsedRef = useRef(null);
  const divBrandRef = useRef(null);
  const headerWidth = useSize(divBrandRef);

  useEffect(() => {
    if (divBrandRef.current.offsetWidth) {
      setCollapsedHeight(collapsedRef.current.offsetHeight + 28);
      const screenMedium = divBrandRef.current.offsetWidth + 12;
      if (screenMedium < 768) {
        setIsSmall(screenMedium);
      } else {
        setIsOpen(false);
      }
      // console.log(isSmall);
    }
  }, [headerWidth]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header css={[...styles]} {...props}>
      <nav css={[...stylesNav]}>
        <div ref={divBrandRef} css={[...stylesBrandToggle]}>
          <div
            css={[...stylesBrand]}
            tabIndex={0}
            role="button"
          >
            <Navlink target="_blank" href="#" imgName="headerLogo.png" />
          </div>
          <div
            css={[...stylesToggle]}
            onClick={() => handleClick()}
            onKeyDown={() => handleKeyDown()}
            role="button"
            tabIndex="-1"
            aria-expanded={isOpen}
          >
            <button type="button">{isOpen ? 'true' : 'false'}</button>
          </div>
        </div>
        <div css={[[...stylesCollapseDefault],
          isOpen && isSmall ? [...stylesCollapsed, css`height:${collapsedHeight}px;transition: height 0.3s cubic-bezier(0.2, 0, 0.1, 1);`] : css``]}
        >
          <div ref={collapsedRef} css={[...stylesLinkGroup]}>
            <Navlink target="_blank" href="#" css={[...stylesLinkButton]}>Company</Navlink>
            <Navlink target="_blank" href="#" css={[...stylesLinkButton]}>Pricing</Navlink>
            <Navlink target="_blank" href="#" css={[...stylesLinkButton]}>Projects</Navlink>
            <Navlink target="_blank" href="#" css={[...stylesLinkButton]}>Services</Navlink>
            <Navlink target="_blank" href="#" css={[xw`md:m-auto`]}>Contact us</Navlink>
          </div>
        </div>
      </nav>
    </header>
  );
}
