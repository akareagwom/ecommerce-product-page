import { Box, Flex, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

const NavBar = () => {
    return ( 
        <Flex 
        justifyContent={'space-around'}
        alignItems={'baseline'}
        py={'5%'}
        boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}
        >
            <Flex alignItems={'baseline'} width={'35%'} justifyContent={'space-between'}>
                <Image src="images/icon-menu.svg" alt="Logo" mb={5} />
                <Text fontWeight={700} fontSize={25}>sneakers</Text>
            </Flex>
            <Tabs display={'none'} variant={'none'}>
                <TabList>
                    <Tab>Collections</Tab>
                    <Tab>Men</Tab>
                    <Tab>Women</Tab>
                    <Tab>About</Tab>
                    <Tab>Contact</Tab>
                </TabList>
            </Tabs>
            <Flex alignItems={'center'} w={'20%'} justifyContent='space-between'>
                <Image src="images/icon-cart.svg" />
                <Image src="images/image-avatar.png" w={'30px'} />
            </Flex>
        </Flex>
     );
}
 
export default NavBar