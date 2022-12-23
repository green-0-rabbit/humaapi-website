import { Global } from '@mantine/core';

const CustomFonts = () => (
  <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'Ubuntu-Bold',
          src: `local('Ubuntu-Bold') url(../../public/fonts/Ubuntu/Ubuntu-Bold.ttf) format(truetype)`,
          fontWeight: 400
        }
      },

      {
        ' @font-face': {
          fontFamily: 'Ubuntu-BoldItalic',
          src: `local('Ubuntu-BoldItalic') url('../../public/fonts/Ubuntu/Ubuntu-BoldItalic.ttf') format(truetype)`,
          fontWeight: 400
        }
      },
      {
        ' @font-face': {
          fontFamily: 'Ubuntu-Italic',
          src: `local('Ubuntu-Italic') url('../../public/fonts/Ubuntu/Ubuntu-Italic.ttf') format(truetype)`,
          fontWeight: 400
        }
      },
      {
        ' @font-face': {
          fontFamily: 'Ubuntu-Light',
          src: `local('Ubuntu-Light') url('../../public/fonts/Ubuntu/Ubuntu-Light.ttf') format(truetype)`,
          fontWeight: 400
        }
      },
      {
        ' @font-face': {
          fontFamily: 'Ubuntu-LightItalic',
          src: `local('Ubuntu-LightItalic') url('../../public/fonts/Ubuntu/Ubuntu-LightItalic.ttf') format(truetype)`,
          fontWeight: 400
        }
      },
      {
        ' @font-face': {
          fontFamily: 'Ubuntu-Medium',
          src: `local('Ubuntu-Medium') url('../../public/fonts/Ubuntu/Ubuntu-Medium.ttf') format(truetype)`,
          fontWeight: 400
        }
      },
      {
        ' @font-face': {
          fontFamily: 'Ubuntu-MediumItalic',
          src: `local('Ubuntu-MediumItalic') url('../../public/fonts/Ubuntu/Ubuntu-MediumItalic.ttf') format(truetype)`,
          fontWeight: 400
        }
      },
      {
        ' @font-face': {
          fontFamily: 'Ubuntu-Regular',
          src: `local('Ubuntu-Regular') url('../../public/fonts/Ubuntu/Ubuntu-Regular.ttf') format(truetype)`,
          fontWeight: 400
        }
      }
    ]}
  />
);
export default CustomFonts;
