import React from 'react'
import { Flex, Spacer, Center, Button, Text, Box } from '@chakra-ui/react'

/*
 * Main Page Section 
 * Consisted of a topbar and a card
 */

const main = () => {
  return (
    <Flex direction='column' bg='#F8F8F8' h='auto' w='auto' color='white' >
        <Topbar/>
        <Box bg='#FFFFFF' h={{ base: '75vh', md: '75vh', lg: '85vh' }} w={{ base: '75vh', md: '130vh', lg: '180vh' }} color='white' ml="32px" mr ="32px" mb="62px" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px">
        </Box>
    </Flex>
  )
}

/*
 * Topbar component
 */

const Topbar = () => {
  return (
      <Flex align="center">
          <Center>
                  <Text textColor="#0057A5" fontWeight="700" fontSize="35px" ml="32px" mt="38" mb="41">
                      Boilerplate
                  </Text>
          </Center>
      </Flex>
  );
}

export default main