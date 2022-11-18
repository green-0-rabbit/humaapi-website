
import { Box, Input } from '@mantine/core';
import ButtonCustom from './button';

const Searchbar = () => {
  return (
   
   <Box>
        <Input
        placeholder="Write your message"
      radius="xl"
      size="lg"
      style={{ width: '100%'}}
      rightSection={
        <ButtonCustom link={'/'} content={'Get in touch'} />
      }
      rightSectionWidth={135}
    />
   </Box>
   
    
    
  );
}

export default Searchbar