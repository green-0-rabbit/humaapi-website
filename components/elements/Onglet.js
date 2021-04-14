/* Example with @emotion/react */
import xw from 'xwind'
import { css, Global, keyframes } from '@emotion/react'
import Img from 'react-optimized-image';




const styles = Object.values({
  standard: css`

  /*-------------standard----------------*/
    font-family:'Bahnschrift';
    font-weight:100;
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
    py-1.5 px-4 m-1.5
    border-transparent
    text-lg leading-normal
    rounded-2xl
    focus[outline-none] 
  `
});

const elipseStyles =Object.values( {
  standard: css`
  /*-------------standard----------------*/
      height: 120px;
      width: 120px;
      border-radius: 50%;
      margin-left: 60px;
      background-color:#e6e7ee ;
      position: relative;
      transition-duration: 500ms;
      z-index: 10;
  /*----------------hover---------------*/
  :hover{
      transform: scale(1.4);
  }
  `,
  
  tailwindcss: xw`
  flex 
  items-center
  justify-center
`
});

const neumorphblockStyles =Object.values( {
  standard: css`
  /*-------------standard----------------*/
      position: absolute;
      height: 85%;
      width: 85%;
      border-radius: 50%;
      background-color:#e6e7ee ;
      box-shadow:  2px 2px 3px #5c5c5f, 
      -3px -3px 3px #ffffff;
  /*----------------hover---------------*/
  :hover{
      transform: scale(1.4);
  }

  img{
   
    /*-- height: auto;--*/
  }
  `,

  tailwindcss: xw`
  flex 
  items-center
  justify-center
`
});

const lienongletStyles =Object.values( {
  standard: css`
  /*-------------standard----------------*/
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: none;
  /*----------------hover---------------*/
  :hover{
      
  }

  img{
   
  }
  `,
  tailwindcss: xw`
  
`
});

const stylesImg =Object.values( {
  standard: css`
  /*-------------standard----------------*/
  position: relative;
  z-index: 10;

  /*------------active-----------------*/
  :active {
    outline: none;
  }
`,
  tailwindcss: xw`
  focus[outline-none] 
`


});



export default function Onglet({ children, imgName, ...props }) {

  return (
      <>
    <div css={imgName ? [...stylesImg] : [...styles]} {...props}>
            <div css={elipseStyles} 
                data-home=""
            >
            <a css={[...lienongletStyles]} href=""></a>
            <div css={[...neumorphblockStyles]}>
            {imgName ?(
            <>
            <Img
              priority ="true"
              src={require(`public/images/ellipse/${imgName}`)}
              sizes={[60]}
              webp
              breakpoints={[768, 769]}
              alt={'onglet'}  
            />
            </>
            )
            :<>{children}</>
            }
            </div>
        </div>               
    </div>
    </>

  )

}
