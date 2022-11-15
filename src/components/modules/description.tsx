import { FC } from "react"

interface IDescription{
    title:string;
    content: string;
    classe:string
}
const Description: FC<IDescription> = (props) => {
    const {title, content, classe} = props;
    return(
        <div className={`${classe}`}>
            <span>{title} </span>
            <span>{content} </span>
        </div>
    )
}
export default Description