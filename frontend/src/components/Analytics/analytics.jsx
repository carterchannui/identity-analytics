import React, { useEffect } from 'react'
import {
  VStack, Box, Flex, Spacer, StatLabel, Stat,
  StatNumber, Center
} from '@chakra-ui/react'
import '../Analytics/analytics.css';
import Chart from '../Chart/chart';
import Topbar from '../Topbar/topbar';
import ImportButton from './importButton';
import StatBox from './statbox';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { dataState1, dataState2, dataState3, dataState4 } from '../Atom/atom'

export default function Analytics() {
    const [data1, setData1] = useRecoilState(dataState1);
    const [data2, setData2] = useRecoilState(dataState2);
    const [data3, setData3] = useRecoilState(dataState3);
    const [data4, setData4] = useRecoilState(dataState4);

    useEffect(() => {
    setData1(sessionStorage.getItem('passes_issued'))
    }, [setData1]);

    useEffect(() => {
    setData2(sessionStorage.getItem('passes_refreshed'))
    }, [setData2]);


    return (
    <VStack w='100%' h='100%' align='left' mx='16' my='8'>
        <Flex align='center'>
            <Topbar title='Analytics' />
            <Spacer />
            <ImportButton />
        </Flex>
        <Flex
        bg='#FFFFFF'
        borderRadius='10px'
        border='2px'
        borderColor='#A3A4AB'
        direction='column'
        h='100%'
        w='100%'
        p='4'
        m='8'
        >
            <Flex align='center' w='100%'>
                <StatBox label='Passes Issued' data={data1} />
                <Spacer />
                <StatBox label='Passes Refreshed' data={data2} />
                <Spacer />
                <StatBox label='Unique Interactions' data={data3} />
                <Spacer />
                <StatBox label='Active Passes' data={data4} />
            </Flex>
            <Box p={8} border='1px' borderRadius='10px' boxShadow='0px 4px 4px 0px rgba(0,0,0,0.30);' m={10}>
                <Chart />
            </Box>
        </Flex>
    </VStack>
  )
}