import React from 'react'
import { Flex, Spacer, Center, Button, Text } from '@chakra-ui/react'

import Card from '../Card/card';

/*
 * Main Page Section
 * Consisted of a topbar and a card
 */

const main = () => {
  return (
    <Flex direction='column' bg='#F8F8F8' h='auto' w='auto' color='white'>
        <Topbar/>
        <Card/>
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
