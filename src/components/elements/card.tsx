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
            <Paper shadow="lg"
             radius="xl"
              p="xl"
               className={`${classe}`}
               style={{...styleCard}}
               >
                {children}
    </Paper>
        </Box>
    )
}
export default Card