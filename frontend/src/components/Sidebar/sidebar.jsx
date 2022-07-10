import React from 'react';
import { 
    Flex, 
    Box, 
    Link, 
    VStack,
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
        <Flex bg='#0057A5' pl='1' pr='1'>"
            <VStack overflow="hidden" w="100px">
                <Box p='1' py='3'>
                    <Image src={Logo} alt='Logo' />
                </Box>
                <Box p='1'py='6'>
                    <Link as={ReactLink} to='/'> <Image src={HomeIcon} alt='Home' /></Link>
                </Box>
                <Box p='1' py='6'>
                    <Link as={ReactLink} to='/analytics'> <Image src={AnalyticsIcon} alt='Analytics' /> </Link>
                </Box>
                <Box p='1' py='6'>
                    <Link as={ReactLink} to='/setting'> <Image src={SettingIcon} alt='Setting' /> </Link>
                </Box>
            </VStack>
        </Flex>
    );
}

export default sidebar;