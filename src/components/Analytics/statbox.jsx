import React from "react";
import {
    Box,
    Flex,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { passesIssued, passesRefreshed, uniqueInteractions, activePasses } from "../Atom/atom";

import CountUp from "react-countup";


export default function StatBox() {

    const passes_issued = useRecoilValue(passesIssued);
    const passes_refreshed = useRecoilValue(passesRefreshed);
    const unique_interactions = useRecoilValue(uniqueInteractions);
    const active_passes = useRecoilValue(activePasses);

    return (
        <Flex>
        <Box  minW={{lg: '100px', xl: '400px'}} minH="110" bg='#FFFFFF' px='8' py='4' ml='10' mt='20px' border="2px"
                borderColor="#A3A4AB" borderRadius='10px'  boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Passes Issued </StatLabel>
                <StatNumber align='center' fontSize="4xl" fontWeight={'bold'}> <CountUp end={passes_issued} separator="," duration={2} /> </StatNumber>
            </Stat>
        </Box>
        <Spacer/>
        <Box minW={{lg: '100px', xl: '400px'}} minH="110" bg='#FFFFFF' px='8' py='4' mt='20px' borderRadius='10px' border="2px" borderColor="#A3A4AB" boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);' >
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Passes Refreshed </StatLabel>
                <StatNumber align='center' fontSize="4xl" fontWeight={'bold'}> <CountUp end={passes_refreshed} separator="," duration={2} /> </StatNumber>
            </Stat>
        </Box>
        <Spacer/>
        <Box minW={{md: '100px',lg: '100px', xl: '400px'}} minH="110" bg='#FFFFFF' px='8' py='4' mt='20px' borderRadius='10px' border="2px" borderColor="#A3A4AB" boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Unique Interactions </StatLabel>
                <StatNumber align='center'fontSize="4xl" fontWeight={'bold'}> <CountUp end={unique_interactions} separator="," duration={2} /> </StatNumber>
            </Stat>
        </Box>
        <Spacer/>
        <Box minW={{md: '100px',lg: '100px', xl: '400px'}} minH="110" bg='#FFFFFF' px='8' py='4' mr='10' mt='20px' borderRadius='10px' border="2px" borderColor="#A3A4AB" boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Active Passes </StatLabel>
                <StatNumber align='center' fontSize="4xl" fontWeight={'bold'}> <CountUp end={active_passes} separator="," duration={2} /></StatNumber>
            </Stat>
        </Box>
        </Flex> 
        
    );
}

