import { Box, Button, Card, CardBody, Flex, Heading, Image, Text,  } from "@chakra-ui/react";
import { useState,SetStateAction,Dispatch, } from "react";
import React from "react";
import CartModal from "./cartModal";
import NavBar from "./navbar";

export interface User{
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    showCount: boolean;
    setShowCount: Dispatch<SetStateAction<boolean>>;
 }

const   CartItem : React.FC<User> = ({count,setCount,showCount,setShowCount}) => {
    // const [count,setCount]= useState(0)
   



    const plusHandle =()=>{
        setCount(count + 1);
    }
    const minusHandle =()=>{
        setCount(count - 1);
    }

    const handleClickCart = ()=>{
        setShowCount(prevState => !prevState);
        

    }

    return ( 
        <Box w={{base:"",lg:"60%"}} mt={{base:'0',lg:"8px"}} p={'6%'} mb={'20%'}>
            <Text textTransform={'uppercase'} color={'hsl(26, 100%, 55%)'}>  Sneaker Company</Text>
            <Heading my={'4%'}>Fall Limited Edition Sneakers</Heading>
            <Text>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
            </Text>
            <Box display={{base:"flex",lg:"block"}} my={'6%'} justifyContent={'space-between'} alignItems={'center'}>
                <Flex w={'40%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize="1.3rem" fontWeight={700}>$125.00</Text>
                    <Text color='hsl(26, 100%, 55%)' bg={'hsl(25, 100%, 94%)'} w={'30%'} borderRadius="5px" p="1%">50%</Text>
                </Flex>
                <Text mt={{base:'0',lg:"2px"}} color={'hsl(220, 14%, 75%)'} textDecor={'line-through'}>$250.00</Text>
            </Box>
            <Box  display={{base:"block",lg:"flex"}} justifyContent={'space-between'}>
                        <Flex boxShadow={'0 0px 2px 0 rgba(0, 0, 0, 0.2)'} w={{base:'100%',lg:"30%"}} px={{base:"",lg:"4px"}} py={{base:'9%',lg:"2%"}} borderRadius={'5px'} bg={'hsl(223, 64%, 98%)'} justifyContent={'space-between'} alignItems={'center'}>
                            <Image cursor={'pointer'} onClick={minusHandle} src="images/icon-minus.svg"/>
                            <Text>{count}</Text>
                            <Image cursor={'pointer'} onClick={plusHandle} src="images/icon-plus.svg"/>
                        </Flex>
                <Button 
                color={'white'} 
                variant={'none'} 
                onClick={handleClickCart}
                py={{base:'9%',lg:"4%"}} 
                mt={{base:'6%',lg:"0"}} 
                px={{base:'8%'}} 
                w={{base:'100%',lg:"50%"}} 
                bg={'hsl(26, 100%, 55%)'}>
                    
                 Add to cart
                </Button>
            </Box>
        </Box>
     );
}
 
export default CartItem;