"use client"
import { useState, createContext } from "react";
import { Box, Card, CardHeader } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import CartItem from "../components/cartItem";
import CartModal from "../components/cartModal";




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
        
            
        <Box bg={'white'}>
            <NavBar count={count}/>
            <Box display={{base:"block",lg:"flex"}}>
                {/* <CartModal  /> */}
                <Carousel/>
                <CartItem  />
            </Box>
        </Box>
     );
}
 
export default LandingPage;