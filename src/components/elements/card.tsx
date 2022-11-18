import { Box, Paper, Text } from "@mantine/core"
import { FC, ReactNode } from "react"

interface ICard {
    classe:string;
    children:ReactNode;
    styleCard:object
}
const Card : FC<ICard>= (props) => {
    const {classe,children,styleCard} = props
    return(
        <Box>
            <Paper 
             radius={28}
              p="xl"
               className={`${classe}  shadow-[#ececec] shadow-lg`}
               style={{...styleCard}}
               >
                {children}
    </Paper>
        </Box>
    )
}
export default Card