import React, { useEffect } from "react";
import {
    VStack,
    Box,
    Flex,
    Spacer,
    StatLabel,
    Stat,
    StatNumber,
    Center,
} from "@chakra-ui/react";
import "../Analytics/analytics.css";
import Chart from "../Chart/chart";
import Topbar from "../Topbar/topbar";
import ImportButton from "./importButton";
import StatBox from "./statbox";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { passesIssued, passesRefreshed, uniqueInteractions, activePasses } from "../Atom/atom";

export default function Analytics() {

    const passes_issued = useRecoilValue(passesIssued);
    const passes_refreshed = useRecoilValue(passesRefreshed);
    const unique_interactions = useRecoilValue(uniqueInteractions);
    const active_passes = useRecoilValue(activePasses);

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
                <Flex align="center" w="100%">
                    <StatBox label="Passes Issued" data={passes_issued} />
                    <Spacer />
                    <StatBox label="Passes Refreshed" data={passes_refreshed} />
                    <Spacer />
                    <StatBox label="Unique Interactions" data={unique_interactions} />
                    <Spacer />
                    <StatBox label="Active Passes" data={active_passes} />
                </Flex>
                <Box
                    p={8}
                    border="1px"
                    borderRadius="10px"
                    boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);"
                    m={10}
                >
                    <Chart />
                </Box>
            </Flex>
        </VStack>
    );
}
