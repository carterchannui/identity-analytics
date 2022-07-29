import React from 'react'
import {
    Center,
    Heading,
    Flex,
    Stack
} from "@chakra-ui/react";

//Welcome Panel
export default function WelcomePanel() {
  return (
    <Center data-testid="welcomePanel">
        <Flex direction="column" ml={40} >
        <Stack spacing={{ base: '2', lg: '4' }}>
        <Heading size="xl" color="#0057A5">Welcome to the Identity Analytics Dashboard!
        </Heading>
        <Heading size="xl" fontWeight="normal">
            You can use this dashboard to view the gateway token usage.
        </Heading>
        </Stack>
        </Flex>
    </Center>
    )
}
