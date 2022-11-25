import { Box, Text } from "@mantine/core";
import { FC } from "react"

interface IDescription{
    title:string;
    content: string;
    classe:string;
    space:number
}
const Description: FC<IDescription> = (props) => {
    const {title, content, classe,space} = props;
    return(
        <Box className={`grid gap-${space}`}>
            <Text className={`${classe}`}>{title}</Text>
            <Text className="font-UbuntuRegular text-sm font-light">{content} </Text>
        </Box>
    )
}
export default Description