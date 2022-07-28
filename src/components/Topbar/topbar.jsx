import React from "react";
import {
    Flex,
    Spacer,
    Heading,
} from "@chakra-ui/react";


/**
 * The Sidebar
 * @param {String} props.title - The title of the page
 */
export default function Topbar(props) {
    return (
        <Flex m="8">
            <Heading data-testid="topbar" color="#0057A5">{props.title}</Heading>
            <Spacer />
        </Flex>
    );
}
