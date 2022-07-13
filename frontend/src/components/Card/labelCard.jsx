import React from 'react'
import {Box, Button, Heading, Text} from '@chakra-ui/react'

export const LabelCard = (props) => {

    return(
        <div>
            <Box borderRadius={"10px"} boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);" w={"200px"} h={"100px"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
                <Text color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}>{props.name}</Text>
                <Heading>{props.data}</Heading>
            </Box>
        </div>
    )
}

export default LabelCard