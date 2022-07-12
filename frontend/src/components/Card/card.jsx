import React from 'react'
import {Box, Button, Heading, Text} from '@chakra-ui/react'
import {ResponsiveContainer, LineChart, Line} from "recharts";
import Chart from "../Chart/chart";




/*
 * Card Component
 * will contain the data and the graph
 */

const card = () => {

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  return (
    <Box bg='#FFFFFF' h={{ base: '75vh', md: '75vh', lg: '85vh' }} w={{ base: '75vh', md: '130vh', lg: '180vh' }} color={"black"}  ml="32px" mr ="32px" mb="62px" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px">


        <Box display={"flex"} justifyContent={"space-between"} ml="32px" mr ="32px" mt ="32px">
            <LabelCard name={"Passes Issued"} data={"39,021"}/>
            <LabelCard name={"Passes Refreshed"} data={"113,049"}/>
            <LabelCard name={"Unique Interactions"} data={"1,542"}/>
            <LabelCard name={"Active Passes"} data={"14,042"}/>
        </Box>

        <Box marginTop={"2rem"}>
            <Chart/>
        </Box>

    </Box>
  )
}


export default card;



export const LabelCard = (props) => {

    return(
        <div>
            <Box borderRadius={"10px"} boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);" w={"200px"} h={"100px"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                <Text color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}>{props.name}</Text>
                <Heading>{props.data}</Heading>
            </Box>
        </div>
    )
}
