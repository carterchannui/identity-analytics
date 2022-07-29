import React from "react";
import {
    Box,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { passesIssued, passesRefreshed, uniqueInteractions, activeGatekeepers } from "../Atom/atom";
import { MetroSpinner } from "react-spinners-kit";
import CountUp from "react-countup";
import "./statbox.css";
// Statbox that displays the number of passes issued, passes refreshed, unique interactions, and active gatekeepers
export default function StatBox() {
    
    /**
    * using useRecoilValue to read the data from the atom
    */
    const passes_issued = useRecoilValue(passesIssued);
    const passes_refreshed = useRecoilValue(passesRefreshed);
    const unique_interactions = useRecoilValue(uniqueInteractions);
    const active_passes = useRecoilValue(activeGatekeepers);


    return (
        <div className="statbox" data-testid="statbox">

        <Box className={"box box1"}  minH="70" bg='#FFFFFF'  py='4'  mt='20px' border="2px"
                borderColor="#A3A4AB" borderRadius='10px'  boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Passes Issued </StatLabel>
                <StatNumber align='center' fontSize="4xl" fontWeight={'bold'}> <CountUp end={passes_issued} separator="," duration={2} /> </StatNumber>
            </Stat>
        </Box>
        <Spacer/>
        <Box className={"box box2"}  minH="70" bg='#FFFFFF' px='8' py='4'  mt='20px' borderRadius='10px' border="2px" borderColor="#A3A4AB" boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);' >
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Passes Refreshed </StatLabel>
                <StatNumber align='center' fontSize="4xl" fontWeight={'bold'}> <CountUp end={passes_refreshed} separator="," duration={2} /> </StatNumber>
            </Stat>
        </Box>
        <Spacer/>
        <Box className={"box box3"} minH="70" bg='#FFFFFF'  px='8' py='4' mt='20px' borderRadius='10px' border="2px" borderColor="#A3A4AB" boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
             <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Active Gatekeepers </StatLabel>
                <StatNumber align='center' fontSize="4xl" fontWeight={'bold'}> <CountUp end={active_passes} separator="," duration={2} /></StatNumber>
            </Stat>
        </Box>
        <Spacer/>
        <Box className={"box box4"}  minH="70" bg='#FFFFFF'  px='8' py='4' mr={"6"}  mt='20px'  borderRadius='10px' border="2px" borderColor="#A3A4AB" boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
            
            <Stat>
                <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'20px'} align='center'> Placeholder </StatLabel>
                <StatNumber align='center'fontSize="4xl" fontWeight={'bold'}> <CountUp end={unique_interactions} separator="," duration={2} /> </StatNumber>
            </Stat>
        </Box>


        </div>

    );
}


