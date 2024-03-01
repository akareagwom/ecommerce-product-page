import { Box,Image,useDisclosure,Modal,ModalBody,ModalContent, ModalHeader } from "@chakra-ui/react";

const CartModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <Box>
            <Image 
            onClick={onOpen} 
            src="images/icon-cart.svg" />

            <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        <ModalHeader
                        py={{base:'5%', lg: '2%'}}
                        boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}
                        >
                            Cart
                        </ModalHeader>
                        <ModalBody>

                        </ModalBody>
                    </ModalContent>
                </Modal>
        </Box>
     );
}
 
export default CartModal;