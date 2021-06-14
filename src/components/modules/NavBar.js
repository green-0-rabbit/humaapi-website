/* eslint-disable import/no-unresolved */
import tw, { css } from 'twin.macro';
import Navlink from '@elements/Navlink';
import { Svg } from 'react-optimized-image';
import NavMenuToggler from '@elements/Button';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved

const stylesLinkButton = Object.values({
  standard: css`
    color :black;
`,
  tailwindcss: tw`
  relative
  md:my-auto md:mr-2 
`
});
const stylesContactUs = Object.values({
  standard: css`
  background:#EA6F66;
  :hover{
    background: #e6e7ee;
  }
`,
  tailwindcss: tw`
  text-white hover:text-red-500
  md:(m-auto md:ml-2)
`
});
const stylesLinkGroup = Object.values({
  standard: css`
  color:black;
`,
  tailwindcss: tw`
  flex flex-col md:flex-row
  text-center
`
});
const stylesCollapseDefault = Object.values({
  standard: css`
  color:black; 
`,
  tailwindcss: tw`
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
  tailwindcss: tw`
  visible overflow-hidden
`
});
const stylesNav = Object.values({
  standard: css`
`,
  tailwindcss: tw`
  md:(items-center flex-row)
  flex flex-col  justify-between
   space-y-5 md:space-y-0  
`
});
const stylesBrandToggle = Object.values({
  standard: css`
`,
  tailwindcss: tw`
  flex text-center flex-row justify-between md:order-first
`
});
const stylesBrand = Object.values({
  standard: css`
`,
  tailwindcss: tw`
  order-first md:m-auto
  focus:(ring-2 ring-red-400 outline-none)
`
});

export default function NavBar({ children, ...props }) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const collapsedRef = useRef(null);

  useEffect(() => {
    if (width) {
      setCollapsedHeight(collapsedRef.current.offsetHeight + 28);
      if (width < 768) {
        setIsSmall(width);
      } else {
        setIsOpen(false);
      }
      // console.log(isSmall);
    }
  }, [width]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header css={[tw`mx-auto m-1.5 py-2 px-2 z-10`]} {...props}>
      <nav css={[...stylesNav]}>
        <div css={[...stylesBrandToggle]}>
          <div
            css={[...stylesBrand]}
            tabIndex={0}
            role="button"
          >
            <Navlink tabIndex="-1" target="_blank" href="#" imgName="headerLogo.png" />
          </div>
          <div
            css={tw`order-last my-auto md:hidden`}
            onClick={() => handleClick()}
            onKeyDown={() => handleKeyDown()}
            role="button"
            tabIndex="-1"
            aria-expanded={isOpen}
          >
            <NavMenuToggler css={[tw`p-3 rounded-md hover:bg-transparent focus:(ring-2 ring-red-400 outline-none)`]}>
              <Svg src={require('public/images/home/Groupe 22.svg')} />
            </NavMenuToggler>
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
            <Navlink target="_blank" href="#" css={[...stylesContactUs]}>Contact us</Navlink>
          </div>
        </div>
      </nav>

    </header>
  );
}
