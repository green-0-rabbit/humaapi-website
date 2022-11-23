import styled from "@emotion/styled";
import { Box } from "@mantine/core";
import ButtonCustom from "src/components/elements/button";
import IllustrationDesign from "src/components/elements/illustrations/illustration/illustration-design";
import Description from "src/components/modules/description";

const Design = ()=>{
  const ContainWebDesign = styled.div``;
  const Contain = styled.div``;


    return(
        <ContainWebDesign className='grid place-items-center px-9 xs:text-center md:text-left'>
                  <Contain className="grid grid-cols-1 place-items-center gap-6 max-w-lg md:max-w-2xl md:gap-20 lg:max-w-[50rem] md:grid-cols-2">
              <Box className="">
              <IllustrationDesign />
                </Box>
                <Box className="space-y-10 ">
                  <Description
                  title={'Design'}
                  content={
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
                  }
                  classe={
                    'common-description-home'
                  }
                  space={8}
                />
                <Box className="mt-6"><ButtonCustom link={'/'} content={'Learn more'} /></Box>
                </Box>
                
             
            </Contain>
    </ContainWebDesign>
    )
}
export default Design