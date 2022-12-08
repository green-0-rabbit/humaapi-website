
import { Modal, Notification } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons';
import { FC, ReactNode } from 'react';
const [opened, { close, open }] = useDisclosure(false);
interface INotificationCustom {
    children:ReactNode,
    title:string,
    issue:'success'|'fail'|'warnning'
}
const NotificationCustom: FC<INotificationCustom> = (props)=>{
    const {children,title,issue} = props
    let selectIcon:ReactNode;
    const sendIcon = (issue:string)=>{
       
        switch (issue) {
            case 'success':
                selectIcon = <IconCheck size={18} />
                break;
                case 'fail':
                    selectIcon = <IconX size={18} />
                    break;
                case 'warnning':
                    selectIcon = <IconAlertCircle size={18} />
                    break;
        
            default:
                break;
        }
    }
    return(
        <Notification title={title} icon={selectIcon} >
            {children}
    </Notification>
    )
}
export default NotificationCustom