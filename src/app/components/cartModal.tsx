import { Box,Image,useDisclosure,Modal,ModalBody,ModalContent, ModalHeader, Text , Flex} from "@chakra-ui/react";

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
                        <ModalBody
                        py={{base:'15%', lg: '25%'}}
                        >
                            <Text display={'none'} textAlign={'center'}>Your cart is empty</Text>
                            <Flex>
                                <Image src="images/image-product-1-thumbnail.jpg" />
                                <Text>fall limited edition sneakers</Text>
                                <Image src="images/icon-delete.svg" />
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
        </Box>
     );
}
 
export default CartModal;