import { Box, Drawer, DrawerCloseButton, DrawerContent, Flex, Image, Tab, TabList, Tabs, Text,useDisclosure,Button } from "@chakra-ui/react";
import { useRef } from "react";

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = useRef();
  

    return ( 
        <Flex 
        justifyContent={'space-around'}
        alignItems={'baseline'}
        py={'5%'}
        boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}
        >
            <Flex alignItems={'baseline'} width={'35%'} justifyContent={'space-between'}>
            <Button variant={'none'}  colorScheme='none' onClick={onOpen}>
                <Image src="images/icon-menu.svg" alt="Logo" mb={5} />
            </Button>
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
                                <Tab></Tab>
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
           
            <Flex alignItems={'center'} w={'20%'} justifyContent='space-between'>
                <Image src="images/icon-cart.svg" />
                <Image src="images/image-avatar.png" w={'30px'} />
            </Flex>
        </Flex>
     );
}
 
export default NavBar