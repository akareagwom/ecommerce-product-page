import { Box, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

const NavBar = () => {
    return ( 
        <Box>
            <Image src="images/icon-menu.svg" alt="Logo" mb={5} />
            <Text>sneakers</Text>
            <Tabs variant={'none'}>
                <TabList>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                </TabList>
            </Tabs>
        </Box>
     );
}
 
export default NavBar;