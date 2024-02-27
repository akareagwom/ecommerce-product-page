import { Box, Button, Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";

const CartItem = () => {
    return ( 
        <Box w={{base:"",lg:"60%"}} p={'6%'} mb={'20%'}>
            <Text textTransform={'uppercase'} color={'hsl(26, 100%, 55%)'}>  Sneaker Company</Text>
            <Heading my={'4%'}>Fall Limited Edition Sneakers</Heading>
            <Text>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
            </Text>
            <Flex my={'6%'} justifyContent={'space-between'} alignItems={'center'}>
                <Flex w={'40%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize="1.3rem" fontWeight={700}>$125.00</Text>
                    <Text color='hsl(26, 100%, 55%)' bg={'hsl(25, 100%, 94%)'} w={'30%'} borderRadius="5px" p="1%">50%</Text>
                </Flex>
                <Text color={'hsl(220, 14%, 75%)'} textDecor={'line-through'}>$250.00</Text>
            </Flex>
            <Box display={{base:"block",lg:"flex"}}>
                <Card bg={'hsl(223, 64%, 98%)'}>
                    <CardBody>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            <Image src="images/icon-minus.svg"/>
                            <Text>0</Text>
                            <Image src="images/icon-plus.svg"/>
                        </Flex>
                    </CardBody>
                </Card>
                <Button py={'9%'} mt={'6%'} px={'8%'} w={'100%'} bg={'hsl(26, 100%, 55%)'}>Add to cart</Button>
            </Box>
        </Box>
     );
}
 
export default CartItem;