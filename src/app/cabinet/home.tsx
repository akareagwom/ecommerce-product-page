"use client"
import { Box, Card, CardHeader } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";
import CartItem from "../components/cartItem";

const LandingPage = () => {
    return ( 
        <Box>
            <NavBar/>
            <Carousel/>
            <CartItem/>
        </Box>
     );
}
 
export default LandingPage;