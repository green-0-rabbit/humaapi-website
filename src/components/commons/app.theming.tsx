import { MantineThemeOverride } from '@mantine/styles';
const themeGlobaly: MantineThemeOverride = {
  colorScheme:'light',
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
