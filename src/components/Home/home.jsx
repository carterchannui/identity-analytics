import React from "react";
import {
    Flex,
    Spacer,
    Box,
    VStack
} from "@chakra-ui/react";
import Globe from 'react-globe.gl';
import Topbar from "../Topbar/topbar";
import WelcomePanel from "./welcomePanel";
// import { useFrame } from '@react-three/fiber';

// Home page
export default function Home() {
    return (
        <VStack w="95%" h="100%" align="left" mx="16" my="8" data-testid="home">
        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} w={"95%"}>
            <Topbar title="Home" />
            <Spacer />
        </Box>
        <Flex
            bg="#FFFFFF"
            borderRadius="10px"
            border="2px"
            borderColor="#A3A4AB"
            direction="row"
            h="100%"
            w={"95%"}
            p="4"
            m="8"
            className={"chart"}
        >
            <WelcomePanel/> {/* WelcomePanel component that displays the welcome message to the user */}
            <Globe height={1000} width={800} backgroundColor="#FFFFFF" globeImageUrl="https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg"/> 
            
            {/* Globe component that displays the globe */}
        </Flex>
    </VStack>
    );
}

// This reference will give us direct access to the globe
// const earthRef = useRef()

// useFrame(( clock ) => {
//     const elapsedTime = clock.getElapsedTime();
//     earthRef.current.rotation.y = elapsedTime / 6;
// }
// )

