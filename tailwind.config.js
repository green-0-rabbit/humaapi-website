/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fblack: '#343434' /*Footer color*/,
        hslate: '#8D8D8D' /*header color*/,
        title: '#333333' /*Title color*/,
        stitle: '#363636' /*Sub title color*/,
        ctitle: '#5D5D5D' /*Content title color*/,
        content: '#7F7F7F' /*content color*/,
        hm: '#EA6F66' /*content color*/
      },
      fontFamily: {
        UbuntuBold: 'Ubuntu-Bold',
        UbuntuBoldItalic: 'Ubuntu-BoldItalic',
        UbuntuItalic: 'Ubuntu-Italic',
        UbuntuLight: 'Ubuntu-Light',
        UbuntuLightItalic: 'Ubuntu-LightItalic',
        UbuntuMedium: 'Ubuntu-Medium',
        UbuntuMediumItalic: 'Ubuntu-MediumItalic',
        UbuntuRegular: 'Ubuntu-Regular'
      },
      screens: {
        xs: '420px'
      }
    }
  },
  plugins: []
  // corePlugins:{preflight:false}
};
