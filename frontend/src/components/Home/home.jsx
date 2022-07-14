import React from 'react'
import { Flex, Box, Center, Button, Text } from '@chakra-ui/react'



/*
 * Home Page Section
 * Consisted of a topbar and a card
 */

const home = () => {
  return (
      <Box h='1280px' w="100%" direction="column" align="left" justify="center" background ="#F8F8F8">
        <Text textColor="#0057A5" fontSize="35px" fontWeight="bold" ml="38px" mt="41px">
          Home
        </Text>
      </Box>
  )
}

export default home
