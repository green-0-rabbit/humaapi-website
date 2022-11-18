import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Box, Transition } from '@mantine/core';
import ButtonCustom from '../elements/button';

const ScrollTop = () =>{
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ButtonCustom link={''} icon={<IconArrowUp size={16}/>} style={transitionStyles} action={()=> scrollTo({ y: 0 })} content={'Scroll to top'}/>
          )}
        </Transition>
      </Affix>
    </Box>
  );
}
export default ScrollTop