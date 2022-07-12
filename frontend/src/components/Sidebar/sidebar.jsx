import React, { useState } from 'react';
import { 
    Flex, 
    Box, 
    Link, 
    VStack,
    PseudoBox
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import AnalyticsIcon from '../../assets/Analytics.png';
import HomeIcon from '../../assets/Home.png';
import SettingIcon from '../../assets/setting.png';
import Logo from '../../assets/Logo.png';

/*
 * Sidebar component
 * uses React Router Link
 */


const sidebar = () => {

    return (
        <Flex bg='#0057A5' pr='2'>"
            <VStack overflow="hidden" w="100px">
                <Box pt='5'>
                    <Image src={Logo} alt='Logo' />
                </Box>
                <Box py='6'>
                    <Link as={ReactLink} to='/'> <Image src={HomeIcon} alt='Home' /></Link>
                </Box>
                <Box py='6' _hover="">
                    <Link as={ReactLink} to='/analytics'> <Image src={AnalyticsIcon} alt='Analytics' /> </Link>
                </Box>
                <Box py='6'>
                    <Link as={ReactLink} to='/setting'> <Image src={SettingIcon} alt='Setting' /> </Link>
                </Box>
                
            </VStack>
        </Flex>
    );
}

export default sidebar;
