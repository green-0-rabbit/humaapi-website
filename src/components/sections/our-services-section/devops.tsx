import styled from "@emotion/styled";
import { Box } from "@mantine/core"
import { FC } from "react";
import ButtonCustom from "src/components/elements/button";
import IllustrationDevops from "src/components/elements/illustrations/illustration/illustration-devops";
import Description from "src/components/modules/description";
import navigation from "src/hooks/navigation-hook";
interface IDevOps{
  labelBtn:string
}
const DevOps :FC<IDevOps>= (props)=>{
  const {labelBtn} = props
  const Contain = styled.div``;
  const Illustration = styled.div``;

    return(
        <Box className='grid place-items-center px-2 xs:text-center md:text-left'>
            <Contain className="grid grid-cols-1 px-2 gap-8 place-items-center max-w-lg md:max-w-2xl md:gap-16 lg:gap-36 lg:max-w-[50rem] md:grid-cols-2">
              <Box className="space-y-10">
                <Description
                  title={'DevOps'}
                  content={
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus fuga, dolores quisquam quibusdam rem!'
                  }
                  classe={
                    'common-description-home'
                  }
                  space={8}
                />
                <Box>
                  <ButtonCustom link={''}content={`${labelBtn ? labelBtn:'Learn More'} `} action={() => navigation('/our-services/devops')} />
                </Box>
                
              </Box>
              <Illustration className="order-first md:order-last">
              <IllustrationDevops />
            </Illustration>
            </Contain>
          </Box>
    )
}
export default DevOps