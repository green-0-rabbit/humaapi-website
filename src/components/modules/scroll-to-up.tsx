import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Box, Button, Transition } from '@mantine/core';

const ScrollTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => {
                scrollTo({ y: 0 });
              }}
              variant="filled"
              className="btn-custom">
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Box>
  );
};
export default ScrollTop;
