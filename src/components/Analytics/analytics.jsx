import React from "react";
import {
    VStack,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import "../Analytics/analytics.css";
import Chart from "../Chart/chart";
import Topbar from "../Topbar/topbar";
import ImportButton from "./importButton";
import StatBox from "./statbox";


export default function Analytics() {

    return (
        <VStack w="100%" h="100%" align="left" mx="16" my="8">
            <Flex align="center">
                <Topbar title="Analytics" />
                <Spacer />
                <ImportButton />
            </Flex>
            <Flex
                bg="#FFFFFF"
                borderRadius="10px"
                border="2px"
                borderColor="#A3A4AB"
                direction="column"
                h="100%"
                w="100%"
                p="4"
                m="8"
            >
                <StatBox/>
                <Chart />
            </Flex>
        </VStack>
    );
}


