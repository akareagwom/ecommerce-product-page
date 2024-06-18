"use client"
import { useState, createContext,SetStateAction,Dispatch } from "react";
import { Box, Card, CardHeader } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import CartItem from "../components/cartItem";
import CartModal from "../components/cartModal";



export interface User{
    count?: number;
    setCount?: Dispatch<SetStateAction<number>>;
    showCount?: boolean;
    setShowCount?: Dispatch<SetStateAction<boolean>>;
}
    
export const CountContext = createContext<User>({}as User);


const LandingPage = () => {
    const [count,setCount]= useState(0);
    const [showCount,setShowCount]= useState(false)
    const value = { count, setCount,showCount,setShowCount }
   
    return ( 
        
            <CountContext.Provider value={{count,setCount}}>
                <Box bg={'white'}>
                    <NavBar count={count} />
                    <Box display={{base:"block",lg:"flex"}}>
                        {/* <CartModal  /> */}
                        <Carousel/>
                        <CartItem {...value}  />
                    </Box>
                </Box>
            </CountContext.Provider>
     );
}
 
export default LandingPage;