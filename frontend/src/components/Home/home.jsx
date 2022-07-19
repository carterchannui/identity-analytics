import React from 'react'
import { Flex, Box, Center, Button, Text, Spacer,loadFile } from '@chakra-ui/react'



/*
 * Home Page Section
 * Consisted of a topbar and a card
 */

function home() {
  return (
    <Flex h='100vh' w="100%" direction="column" align="left" justify="top" background ="#DFE0EB">
      <Center>
        <Text textColor="#0057A5" fontSize="35px" fontWeight="bold" ml="38px" mt="41px">
          Home
        </Text>
        <Spacer/>
        
      </Center>
      </Flex>
  )
}

export default home
