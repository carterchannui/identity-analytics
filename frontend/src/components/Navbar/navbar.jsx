import React from 'react';
import { 
    Flex, 
    Box, 
    Link, 
    Text, 
    Heading, 
    VStack
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import AnalyticsIcon from '../../assets/Analytics.png';
import HomeIcon from '../../assets/Home.png';
import Logo from '../../assets/Logo.png';

const navbar = () => {
    return (
        <Flex bg='blue.700' pl='0' pr='10'>
            <VStack>
                <Box p='2'>
                    <Image src={Logo} alt='Logo' />
                </Box>
                <Box p='2'>
                    <Link as={ReactLink} to='/'> <Image src={HomeIcon} alt='Home' /></Link>
                </Box>
                <Box p='2'>
                    <Link as={ReactLink} to='/analytics'> <Image src={AnalyticsIcon} alt='Analytics' /> </Link>
                </Box>
            </VStack>
        </Flex>
    );
}

export default navbar;