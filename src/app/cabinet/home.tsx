"use client"
import { Box, Card, CardHeader } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Carousel from "../components/carousel";

const LandingPage = () => {
    return ( 
        <Box>
            <NavBar/>
            <Carousel/>
        </Box>
     );
}
 
export default LandingPage;