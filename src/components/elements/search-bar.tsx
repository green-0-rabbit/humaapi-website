
import { Box, Input } from '@mantine/core';
import ButtonCustom from './button';

const Searchbar = () => {
  return (
   
   <Box>
        <Input
        className='block'
      placeholder="Write your message"
      radius="xl"
      variant='filled'
      size="lg"
      style={{ width: 350}}
      rightSection={
        <ButtonCustom link={'/'} content={'Get in touch'} />
      }
      rightSectionWidth={135}
    />
   </Box>
   
    
    
  );
}

export default Searchbar