import React from "react";
import {
    VStack,
    Flex,
    Spacer, Box,
} from "@chakra-ui/react";
import Chart from "../Chart/chart";
import Topbar from "../Topbar/topbar";
import ImportButton from "./importButton";
import StatBox from "./statbox";

// Analytics page
export default function Analytics() {
    return (
        <VStack w="100%" h="100%" align="left" mx="16" my="8" data-testid="analytics">
            <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} w={"95%"}>
                <Topbar title="Analytics" />
                <Spacer />
                <ImportButton  /> {/* Import Button Component that will be used to import csv data from a file and format and parse to JSON object */}
            </Box>
            <Flex
                bg="#FFFFFF"
                borderRadius="10px"
                border="2px"
                borderColor="#A3A4AB"
                direction="column"
                h="100%"
                w={"95%"}
                p="4"
                m="8"
                className={"chart"}
            >
                <StatBox/> {/* StatBox component that displays the number of passes issued, passes refreshed, unique interactions, and active gatekeepers */}
                <Chart /> {/* Chart componnent that displays the data of the passes issued as a graph using recharts */}
            </Flex>
        </VStack>
    );
}



