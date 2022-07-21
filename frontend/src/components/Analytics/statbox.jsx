import React from 'react';
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
} from '@chakra-ui/react';

export default function StatBox(props) {
    return (
        <Box
            bg='#FFFFFF' 
            px='16' 
            py='4' 
            mx="8" 
            my="8" 
            borderRadius="10px" 
            boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);"
            border='4px'
            borderColor='#A3A4AB'
        >
            <Center>
                <Heading
                    color="#0057A5"
                    size='md'
                    fontWeight='700'
                    p='2'
                > 
                    {props.label} 
                </Heading>
            </Center>
                <Center>
                    <Box py='4'>
                        <Heading size='2xl'
                        fontWeight='600'
                    > {props.data.toLocaleString()} </Heading>
                    </Box>
                </Center>
        </Box>
    );
}
