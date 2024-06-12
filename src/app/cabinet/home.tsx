"use client"
import { useState, createContext,SetStateAction,Dispatch } from "react";
import { Box, Card, CardHeader } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import CartItem from "../components/cartItem";
import CartModal from "../components/cartModal";



export interface User{
    count: Number;
    setCount: Dispatch<SetStateAction<Number>>;
}
export const CountContext = createContext<User>({}as User);


const LandingPage = () => {
    const [count,setCount]= useState(0);
    const value = { count, setCount }
   
    return ( 
        
            <CountContext.Provider value={{count,setCount}}>
                <Box bg={'white'}>
                    {/* <NavBar  /> */}
                    <Box display={{base:"block",lg:"flex"}}>
                        {/* <CartModal  /> */}
                        <Carousel/>
                        <CartItem  />
                    </Box>
                </Box>
            </CountContext.Provider>
     );
}
 
export default LandingPage;