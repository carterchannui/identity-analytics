import React from 'react'
import { Box } from '@chakra-ui/react'

/*
 * Card Component
 * will contain the data and the graph
 */

const card = () => {
  return (
    <Box bg='#FFFFFF' h={{ base: '75vh', md: '75vh', lg: '85vh' }} w={{ base: '75vh', md: '130vh', lg: '180vh' }} color='white' ml="32px" mr ="32px" mb="62px" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px">
      {/*Test Data Here*/}
    </Box>
  )
}

export default card