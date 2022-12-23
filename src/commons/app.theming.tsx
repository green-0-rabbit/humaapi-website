import { MantineThemeOverride } from '@mantine/styles';

const themeGlobaly: MantineThemeOverride = {
  colorScheme: 'light',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  },
  lineHeight: '20px',
  headings: {
    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: 32, lineHeight: 1.4 },
      h2: { fontSize: 28, lineHeight: 1.5 },
      h3: { fontSize: 24, lineHeight: 1.5 },
      h4: { fontSize: 20, lineHeight: 1.5 },
      h5: { fontSize: 16, lineHeight: 1.5 },
      h6: { fontSize: 14, lineHeight: 1.5 }
    }
  },
  components: {
    Input: {
      defaultProps: {
        radius: 'md'
      },
      styles: (theme) => ({
        input: {
          backgroundColor: theme.colorScheme === 'dark' ? '#3d3d3d' : '#f3f3f3',
          border: 'none'
        }
      })
    },
    Button: {
      defaultProps: {
        radius: 'xl'
      },
      styles: () => ({
        root: {}
      })
    },
    Paper: {
      defaultProps: {
        radius: 28,
        p: 'lg'
      },
      styles: (theme) => ({
        root: {
          background: theme.colorScheme === 'dark' ? '#3d3d3d' : '',
          boxShadow: theme.colorScheme === 'dark' ? '' : '1px 1px 30px #eee'
        }
      })
    }
  }
};

export default themeGlobaly;
