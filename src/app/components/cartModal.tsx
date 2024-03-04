import { Box,Image,useDisclosure,Modal,ModalBody,ModalContent, ModalHeader, Text , Flex,Badge} from "@chakra-ui/react";

const CartModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <Box>
             <Flex>
                <Image 
                onClick={onOpen} 
                src="images/icon-cart.svg" />
                <Badge color={'white'} borderRadius={'50%'} px={2} py={0.5} bg={'hsl(26, 100%, 55%)'}>3</Badge>
             </Flex>

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
                                <Image borderRadius={10} src="images/image-product-1-thumbnail.jpg" />
                                <Text>
                                    fall limited edition sneakers
                                    $125 x 3 $375.00

                                </Text>
                                <Image src="images/icon-delete.svg" />
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
        </Box>
     );
}
 
export default CartModal;