import React from "react";
import { Box, Link, VStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import AnalyticsIcon from "../../assets/Analytics.png";
import HomeIcon from "../../assets/Home.png";
import SettingIcon from "../../assets/setting.png";
import Logo from "../../assets/Logo.png";
import "./sidebar.css";

//The Sidebar
export default function sidebar() {
    return (
        <VStack data-testid="sidebar" minW="100px" bg="#0057A5" minH="100%">
            <Box pt="5" cursor={"pointer"} >
                <Link as={ReactLink} to="/"> {/* React Link is used to link to a page to Home */}
                <Image src={Logo} alt="Logo" />
                </Link>
            </Box>
            
            <Box py="6" className={"sideIcon"}>
                <Link as={ReactLink} to="/analytics"> {/* React Link is used to link to a page to Analytics */}
                    <Image src={AnalyticsIcon} alt="Analytics" />
                </Link>
            </Box>
        </VStack>
    );
}

