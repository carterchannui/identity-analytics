import React from "react";
import {
    Box,
    Flex,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
    Center,
    Text,
    Heading,
} from "@chakra-ui/react";

import CountUp from "react-countup";

export default function StatBox(props) {
    return (
        <Box
            bg="#FFFFFF"
            px="16"
            py="4"
            mx="8"
            my="8"
            borderRadius="10px"
            boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);"
            border="4px"
            borderColor="#A3A4AB"
        >
            <Center>
                <Heading color="#0057A5" size="md" fontWeight="700" p="2">
                    {props.label}
                </Heading>
            </Center>
            <Center>
                <Box py="4">
                    <Heading size="2xl" fontWeight="600">
                    <CountUp end={props.data} separator="," duration={2} />
                    </Heading>
                </Box>
            </Center>
        </Box>
    );
}

{
    /* <Flex>
                    <Box bg='#FFFFFF' px='8' py='4' ml='10' mt='20px' borderRadius='10px' border='1px' boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
                        <Stat>
                            <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'16px'}> Passes Issued </StatLabel>
                            <StatNumber align='center' fontWeight={'bold'}> <CountUp end={data1.toLocaleString()} /> </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mt='20px' borderRadius='10px' border='1px' boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
                        <Stat>
                            <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'16px'}> Passes Refreshed </StatLabel>
                            <StatNumber align='center' fontWeight={'bold'}> <CountUp end={data2} /> </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mt='20px' borderRadius='10px' border='1px' boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
                        <Stat>
                            <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'16px'}> Unique Interactions </StatLabel>
                            <StatNumber align='center' fontWeight={'bold'}> <CountUp end={data3} /> </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mr='10' mt='20px' borderRadius='10px' border='1px' boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);'>
                        <Stat>
                            <StatLabel color={'#0057A5'} fontWeight={'bold'} fontSize={'16px'}> Active Passes </StatLabel>
                            <StatNumber align='center' fontWeight={'bold'}> <CountUp end={data4} /> </StatNumber>
                        </Stat>
                    </Box>
</Flex> */
}
