import { Box,Image,useDisclosure } from "@chakra-ui/react";

const CartModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <Box>
            <Image 
            // onClick={onOpen} 
            src="images/icon-cart.svg" />
        </Box>
     );
}
 
export default CartModal;