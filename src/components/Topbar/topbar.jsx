import React from "react";
import {
    Flex,
    Spacer,
    Heading,
} from "@chakra-ui/react";
import "../Analytics/analytics.css";

export default function Topbar(props) {
    return (
        <Flex m="8">
            <Heading color="#0057A5">{props.title}</Heading>
            <Spacer />
        </Flex>
    );
}