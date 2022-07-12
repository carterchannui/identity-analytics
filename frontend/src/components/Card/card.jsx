import React from 'react'
import { Box } from '@chakra-ui/react'
import { LineChart, Line } from 'recharts'

/*
 * Card Component
 * will contain the data and the graph
 */

const card = () => {
  return (
    <Box bg='#FFFFFF' h={{ base: '75vh', md: '75vh', lg: '85vh' }} w={{ base: '75vh', md: '130vh', lg: '180vh' }} color='white' ml="32px" mr ="32px" mb="62px" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px">
      {/*Test Data Here*/}
      <renderLineChart mt="30px"/>
    </Box>
  )
}

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export default card