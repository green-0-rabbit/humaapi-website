import { InputProps } from '@mantine/core';
import { FC } from 'react';
import BrandButton from '../elements/brand-button';
import BrandInput from '../elements/brand-input';
interface ICustomInput extends InputProps {
  placeholder?: string;
}

const SearchBar: FC<ICustomInput> = ({ ...props }) => {
  return (
    <BrandInput
      placeholder="write your message"
      rightSection={
        <BrandButton
        variant="filled" className='btn-custom'
          action={()=> console.log('it works !!!') }
          content={'Get in touch'}
        />
      }
    />
  );
};

export default SearchBar;
