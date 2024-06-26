import { Box,Image,useDisclosure,Modal,ModalBody,ModalContent, ModalHeader, Text , Flex,Badge,Button} from "@chakra-ui/react";
// import {UserContext} from '../cabinet/home';
import React, { useContext } from "react";

export interface User{
   count: number;
   showCount: boolean;

}
const CartModal: React.FC<User> = ({count,showCount}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    
    return ( 
        <Box>
             <Flex>
                <Image 
                onClick={onOpen} 
                src="images/icon-cart.svg" />
                <Badge variant={'none'}>
                    {/* {showCount?'': <Text>{count}</Text>} */}
                    {showCount && <Text display={count === 0? 'none' : 'block'} color={'white'} borderRadius={'50%'} px={2} py={0.5} bg={'hsl(26, 100%, 55%)'}>{count}</Text>}

                    </Badge>
             </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        <ModalHeader
                        py={{base:'5%', lg: '2%'}}
                        boxShadow={'0 2px 2px 0 rgba(0, 0, 0, 0.2)'}
                        >
                            Cart
                        </ModalHeader>
                        <ModalBody
                        py={{base:'15%', lg: '25%'}}
                        >
                            {count === 0 ?<Text textAlign={'center'}>Your cart is empty</Text>
                            :<Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Image w={'20%'} borderRadius={10} src="images/image-product-1-thumbnail.jpg" />

                                <Text lineHeight={7} w={'70%'} textTransform={'capitalize'}>
                                    fall limited edition sneakers
                                    $125 x 3 $375.00

                                </Text>
                                <Image  src="images/icon-delete.svg" />
                            </Flex>}
                            <Button 
                            color={'white'} 
                            variant={'none'} 
                            py={{base:'9%',lg:"4%"}}
                            mt={{base:'6%',lg:"0"}}
                            px={{base:'8%'}}
                            w={{base:'100%',lg:"50%"}} 
                            bg={'hsl(26, 100%, 55%)'}>
                                checkout
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
        </Box>
     );
}
 
export default CartModal;