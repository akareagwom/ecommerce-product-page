"use client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./cabinet/home";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, ChakraProvider } from "@chakra-ui/react";


export default function Home() {
  return (
    <ChakraProvider>
      
            <LandingPage/>
       
    </ChakraProvider>
  );
}
