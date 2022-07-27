import React from "react";
import { Box, Link, VStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import AnalyticsIcon from "../../assets/Analytics.png";
import HomeIcon from "../../assets/Home.png";
import SettingIcon from "../../assets/setting.png";
import Logo from "../../assets/Logo.png";
import "./sidebar.css";

/*
 * Sidebar component
 * uses React Router Link
 */

function sidebar() {
    return (
        <VStack w="100px" bg="#0057A5" h="100vh">
            <Box pt="5">
                <Image src={Logo} alt="Logo" />
            </Box>
            <Box py="6" className={"sideIcon"}>
                <Link as={ReactLink} to="/">
                    {" "}
                    <Image src={HomeIcon} alt="Home" />
                </Link>
            </Box>
            <Box py="6" className={"sideIcon"}>
                <Link as={ReactLink} to="/analytics">
                    {" "}
                    <Image src={AnalyticsIcon} alt="Analytics" />{" "}
                </Link>
            </Box>
            <Box py="6" className={"sideIcon"}>
                <Link as={ReactLink} to="/settings">
                    {" "}
                    <Image src={SettingIcon} alt="Settings" />{" "}
                </Link>
            </Box>
        </VStack>
    );
}

export default sidebar;
