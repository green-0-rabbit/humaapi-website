
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FC, ReactNode } from 'react';
const [opened, { close, open }] = useDisclosure(false);
interface IModalCustom {
    children:ReactNode,
}
const ModalCustom: FC<IModalCustom> = (props)=>{
    const {children} = props
    return(
        <Modal opened={opened} onClose={close} centered withCloseButton={true} >
            {children}
    </Modal>
    )
}
export default ModalCustom