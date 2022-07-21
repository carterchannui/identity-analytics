import React from 'react'
import { 
    Flex,
    Box,
    Center,
    Button,
    Text,
    Heading,
    Spacer,
    Grid,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,

} from '@chakra-ui/react'
import Chart from "../../components/Chart/chart";
import Sidebar from "../../components/Sidebar/sidebar"

/*
 * Home Page Section
 * Consisted of a topbar and a card
 */

const home = () => {
  return (
        <Flex h='100%' w="100%" bg='#E7E7E7' p='4' m='8' borderRadius="10px">
            <Box w='100%'>
                <Flex>
                    <Box bg='#FFFFFF' px='8' py='4' borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel> Passes Issued </StatLabel>
                            <StatNumber> 40,000 </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel> Passes Issued </StatLabel>
                            <StatNumber> 40,000 </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel> Passes Issued </StatLabel>
                            <StatNumber> 40,000 </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel> Passes Issued </StatLabel>
                            <StatNumber> 40,000 </StatNumber>
                        </Stat>
                    </Box>
                </Flex>
                <Box p='8'>
                    <Chart/>
                </Box>
            </Box>
    </Flex>
  )
}

export default home
