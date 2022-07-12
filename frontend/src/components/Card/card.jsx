import React from 'react'
import { Box, Heading, Flex, Spacer } from '@chakra-ui/react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
/*
 * Card Component
 * will contain the data and the graph
 */

const card = () => {
  return (
    <Box bg='#FFFFFF' h={{ base: '75vh', md: '75vh', lg: '85vh' }} w={{ base: '75vh', md: '130vh', lg: '180vh' }} color='white' ml="32px" mr ="32px" mb="62px" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px">
<flex>
     <DataDisplay/>
     </flex>
    </Box>
  )
}

const data = [
  {
    name: 'January',
    PassIssue: 4000
  },
  {
    name: "February",
    PassIssue: 1000,
  },
  {
    name: "March",
    PassIssue: 4000,
  },
  {
    name: "April",
    PassIssue: 800,
  },
  {
    name: "June",
    PassIssue: 1500,
  },
  {
    name: "July",
    PassIssue: 3000,
  },
];

const DataDisplay = () => {
  return (
    <Flex direction="column">
    <Flex direction="row" >
      <Box h="134px" w="258px" background="white" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px" mt="40px" ml="20px">
      <Heading as="h1" fontSize="xl" fontWeight="700" color="#0057A5" mt="40px" align="center">
        Pass Issued
      <Heading as="h3" fontSize="3xl" fontWeight="700" color="#000000" mt="10px" align="center">
        39,021
        </Heading>
        </Heading>
    </Box>
    <Box h="134px" w="258px" background="white" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px" mt="40px" ml="80px">
      <Heading fontSize="xl" fontWeight="700" color="#0057A5" mt="40px" align="center">
        Pass Refreshed
      </Heading>
      <Heading as="h3" fontSize="3xl" fontWeight="700" color="#000000" mt="10px" align="center">
        113,049
        </Heading>
    </Box>
    <Box h="134px" w="258px" background="white" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px" mt="40px" ml="80px">
      <Heading fontSize="xl" fontWeight="700" color="#0057A5" mt="40px" align="center">
        Unique Interactions
      </Heading>
      <Heading as="h3" fontSize="3xl" fontWeight="700" color="#000000" mt="10px" align="center" mb ="40px">
        1,542
        </Heading>
    </Box>
    <Box h="134px" w="258px" background="white" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px" mt="40px" ml="80px">
      <Heading fontSize="xl" fontWeight="700" color="#0057A5" mt="40px" align="center">
        Active Passes
      </Heading>
      <Heading as="h3" fontSize="3xl" fontWeight="700" color="#000000" mt="10px" align="center">
        14,042
        </Heading>
    </Box>
    </Flex>
    <Box h="537px" w="1231px" background="white" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px" mt="40px" ml="80px">
    <ResponsiveContainer width="90%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
        <XAxis dataKey="name" tick={{fill:"#fff"}}/>
        <YAxis tick={{fill:"#fff"}} />
        <Tooltip contentStyle={{ backgroundColor: "#0057A5", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="PassIssue" stroke="#0057A5" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#0057A5",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#0057A5",strokeWidth: 5,r:10}} />
        
      </LineChart>
    </ResponsiveContainer>
    </Box>
    </Flex>
    
  )
}

export default card