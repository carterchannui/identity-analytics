import React from 'react'
import { Box, Flex, Spacer, StatLabel, Stat,
  StatNumber, Center, Button,
  Text } from '@chakra-ui/react'
import '../Analytics/analytics.css';
import Chart from "../Chart/chart";

/*
 * Analytics Page Section 
 * Consisted of a topbar and a card
 */

const analytics = () => {
  return (
    <Flex h='100%' w="100%" direction="column" align="left" justify="center" background ="#F8F8F8">
      <Center>
        <Text textColor="#0057A5" fontSize="35px" fontWeight="bold" ml="38px" mt="41px">
          Analytics
        </Text>
        <Spacer/>
        <Box>
          <Button onClick={loadFile} id="get_file" colorScheme='blue' size='lg'>
                    <Text>
                        Upload CSV
                    </Text>
                </Button>
                <input type="file" id="input_file"/>
          </Box>
      </Center>
    <Flex bg='#FFFFFF'  borderRadius="10px" ml="32px" mt="32px" mr="32px">
            <Box w='100%' boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);" >
                <Flex>
                    <Box bg='#FFFFFF' px='8' py='4' ml="10" mt="20px" borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Passes Issued </StatLabel>
                            <StatNumber fontWeight={"bold"}> 39,021 </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mt="20px" borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Passes Refreshed </StatLabel>
                            <StatNumber fontWeight={"bold"}> 113,049 </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mt="20px" borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Unique Interactions </StatLabel>
                            <StatNumber fontWeight={"bold"}> 1,542 </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mr="10" mt="20px" borderRadius="10px" boxShadow="-1px 7px 5px 1px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Active Passes </StatLabel>
                            <StatNumber fontWeight={"bold"}> 14,042 </StatNumber>
                        </Stat>
                    </Box>
                </Flex>
                <Box p='8'>
                    <Chart/>
                </Box>
            </Box>
      </Flex>
          
    </Flex>
  )
}

export default analytics


function collectData(event) {
  // console.log(event.target.result);
  let json = convert(event.target.result);
  let passes_issued = 0;
  let passes_refreshed = 0;
  let actions = 0;

  json.forEach(item => {
      if (item.instruction_name === "IssueVanilla") {
          passes_issued++;
      } else {
          // Assumes item.instruction_name === UpdateExpiry.
          passes_refreshed++;
      }
      ++actions;
  });
   console.log(passes_issued);
   console.log(passes_refreshed);
   console.log(actions);
  localStorage.setItem('passes_issued', passes_issued);
  localStorage.setItem('passes_refreshed', passes_refreshed);
  localStorage.setItem('total_actions', actions);
  
   // Store data locally.
   sessionStorage.setItem('passes_issued', passes_issued);
   sessionStorage.setItem('passes_refreshed', passes_refreshed);
   sessionStorage.setItem('total_actions', actions);
}

function loadFile() {
  // do not use this 
  // use useRef 
  
  document.getElementById('input_file').click();
  const input = document.querySelector('input');

  input.onchange = () => {
      if (input.files.length === 0) {
          console.log("No file selected for upload.");
      } else {
          const selectedFile = input.files[0];
          console.log(`Loaded ${selectedFile.name}`);
          let reader = new FileReader();

          reader.onload = collectData;

          reader.readAsText(selectedFile);

      }
  }
}

const convert = (data, delimiter = ',') => {
const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
return data
  .slice(data.indexOf('\n') + 1)
  .split('\n')
  .map(v => {
    const values = v.split(delimiter);
    return titles.reduce(
      // eslint-disable-next-line
      (obj, title, index) => ((obj[title] = values[index]), obj),
      {}
    );
  });
};