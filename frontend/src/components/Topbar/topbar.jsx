import React from 'react'
import { Box, Flex, Spacer, Center, Button, Heading, Text } from '@chakra-ui/react'
import '../Analytics/analytics.css';
import Chart from "../Chart/chart";
import {ResponsiveContainer, LineChart, Line} from "recharts";
import StatBox from  "../Analytics/statbox";

export default function Topbar(props) {
  return (
        <Flex m='8'>
            <Heading>
                {props.title} 
            </Heading>
            <Spacer/>
        </Flex>
  );
}
