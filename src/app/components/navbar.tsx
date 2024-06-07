import { Box, Drawer, DrawerCloseButton, DrawerContent, Flex, Image, Tab, TabList, Tabs, Text,useDisclosure,Button, Modal, ModalContent, ModalBody,Badge } from "@chakra-ui/react";
import { useRef } from "react";
import CartModal from "./cartModal";

export interface User{
    count: number;
 
 }

const NavBar : React.FC<User> = ({count}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = useRef();
  

    return ( 
        <Flex 
        justifyContent={'space-around'}
        alignItems={'baseline'}
        py={{base:'5%', lg: '2%'}}
        boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}
        >
            <Flex 
            alignItems={'baseline'} 
            width={'35%'} 
            justifyContent={{base:'space-between',lg:"space-around"}}

            >
                <Image display={{base:"block",lg:"none"}} onClick={onOpen} src="images/icon-menu.svg" alt="Logo" mb={5} />
                <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                
                // finalFocusRef={btnRef}
                >
                    <DrawerContent  bg={'white'} >
                        <Tabs w={'16%'} display={'block'} variant={'none'}>
                            <DrawerCloseButton/>
                            <TabList mt={4} display={'block'}>
                                <Tab>Collections</Tab>
                                <Tab>Men</Tab>
                                <Tab>Women</Tab>
                                <Tab>About</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                        </Tabs>
                    </DrawerContent>
                </Drawer>
                <Text fontWeight={700} fontSize={25}>sneakers</Text>
            </Flex>
            <Tabs display={{base:"none",lg:"flex"}} variant={'none'}>
                            <TabList>
                                <Tab>Collections</Tab>
                                <Tab>Men</Tab>
                                <Tab>Women</Tab>
                                <Tab>About</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                        </Tabs>
           
            <Flex alignItems={'center'} w={'20%'} justifyContent='space-between'>
                <Box>
                    <CartModal count={count} />
                </Box>
                <Image src="images/image-avatar.png" w={'30px'} />
            </Flex>
        </Flex>
     );
}
 
export default NavBar