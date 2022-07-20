import React, { useEffect } from 'react'
import { Box, Flex, Spacer, StatLabel, Stat,
  StatNumber, Center, Button,
  Text } from '@chakra-ui/react'
import '../Analytics/analytics.css';
import Chart from "../Chart/chart";
import { useRecoilState } from 'recoil';
import { dataState1, dataState2, dataState3, dataState4 } from '../Atom/atom'
/*
 * Analytics Page Section 
 * Consisted of a topbar and a card
 */


function Analytics () {

  const [data1, setData1] = useRecoilState(dataState1);
  const [data2, setData2] = useRecoilState(dataState2);
  const [data3, setData3] = useRecoilState(dataState3);
  const [data4, setData4] = useRecoilState(dataState4);

   useEffect(() => {
     setData1(sessionStorage.getItem('passes_issued'))
   }, ['passes_issued']);

   useEffect(() => {
    setData2(sessionStorage.getItem('passes_refreshed'))
  }, ['passes_refreshed']);

  

  return (
    <Flex h='100vh' w="100%" direction="column" align="left" justify="top" background ="#DFE0EB">
      <Center>
        <Text textColor="#0057A5" fontSize="35px" fontWeight="bold" ml="38px" mt="41px">
          Analytics
        </Text>
        <Spacer/>
        <Box mt="40px" mr="30px">
          <Button onClick={loadFile} id="get_file" colorScheme='blue' size='lg'>
                    <Text>
                        Import CSV
                    </Text>
                </Button>
                <input type="file" id="input_file"/>
          </Box>
      </Center>
    <Flex bg='#FFFFFF'  borderRadius="10px" ml="32px" mt="32px" mr="32px">
            <Box w='100%' border="1px"  borderRadius="10px"boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);" >
                <Flex>
                    <Box bg='#FFFFFF' px='8' py='4' ml="10" mt="20px" borderRadius="10px" border="1px" boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Passes Issued </StatLabel>
                            <StatNumber align="center" fontWeight={"bold"}> {data1} </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mt="20px" borderRadius="10px" border="1px" boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Passes Refreshed </StatLabel>
                            <StatNumber align="center" fontWeight={"bold"}> {data2} </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mt="20px" borderRadius="10px" border="1px" boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Unique Interactions </StatLabel>
                            <StatNumber align="center" fontWeight={"bold"}> {data3} </StatNumber>
                        </Stat>
                    </Box>
                    <Spacer/>
                    <Box bg='#FFFFFF' px='8' py='4' mr="10" mt="20px" borderRadius="10px" border="1px" boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);">
                        <Stat>
                            <StatLabel color={"#0057A5"} fontWeight={"bold"} fontSize={"16px"}> Active Passes </StatLabel>
                            <StatNumber align="center" fontWeight={"bold"}> {data4} </StatNumber>
                        </Stat>
                    </Box>
                </Flex>
                <Box p={8} borderRadius="10px" boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);" m={10}>
                    <Chart/>
                    
                </Box>
            </Box>
      </Flex>
          
    </Flex>
  )
}

export default Analytics


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