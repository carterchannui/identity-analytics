import React from "react";
import { Flex, Center, Text, Spacer } from "@chakra-ui/react";
/*
 * Setting Page Section
 */

function settings() {
    return (
        <Flex
            h="100vh"
            w="100%"
            direction="column"
            align="left"
            justify="top"
            background="#E7E7E7"
        >
            <Center>
                <Text
                    textColor="#0057A5"
                    fontSize="35px"
                    fontWeight="bold"
                    ml="38px"
                    mt="41px"
                >
                    Settings
                </Text>
                <Spacer />
            </Center>
        </Flex>
    );
}

export default settings;
