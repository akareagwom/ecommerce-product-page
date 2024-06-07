"use client"
import { useState, createContext } from "react";
import { Box, Card, CardHeader } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import CartItem from "../components/cartItem";

export interface User{
    count: number;
}

export const UserContext = createContext({});

const LandingPage = () => {
    const [count,setCount]= useState(0)


    const plusHandle =()=>{
        setCount(count + 1);
        console.log(count)
    }
    const minusHandle =()=>{
        setCount(count - 1);
        console.log(count)
    }
    return ( 
        <UserContext.Provider value={[count,setCount]}>
            
        <Box bg={'white'}>
            <NavBar/>
            <Box display={{base:"block",lg:"flex"}}>
                <Carousel/>
                <CartItem  />
            </Box>
        </Box>
        </UserContext.Provider>
     );
}
 
export default LandingPage;