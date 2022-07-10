import React from 'react'
import { Flex, Center, Heading, Text } from '@chakra-ui/react'

import Card from '../Card/card';

/*
 * Setting Page Section
 */

const setting = () => {
  return (
    <Flex direction='column' bg='#F8F8F8' h='auto' w='auto' color='white' >
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
                      Setting
                  </Text>
          </Center>
      </Flex>
  );
}

export default setting