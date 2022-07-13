import React from 'react'
import { Box, Flex, Spacer, Center, Button, Text } from '@chakra-ui/react'
import '../Analytics/analytics.css';
import Chart from "../Chart/chart";
import LabelCard from "./labelCard"
import {ResponsiveContainer, LineChart, Line} from "recharts";

/*
 * Analytics Page Section 
 * Consisted of a topbar and a card
 */

const analytics = () => {
  return (
    <Flex direction='column' bg='#F8F8F8' h='auto' w='auto' color='white' >
        <Flex align="center">
          <Center>
                  <Text textColor="#0057A5" fontWeight="700" fontSize="35px" ml="32px" mt="38" mb="41">
                      Analytics
                  </Text>
          </Center>
          <Spacer/> 
          <Center>
          <Button onClick={loadFile} id="get_file" colorScheme='blue' size='lg'>
                    <Text>
                        Upload CSV
                    </Text>
                </Button>
                <input type="file" id="input_file"/>
          </Center>
      </Flex>
      <Flex w="100%">
    <Box bg='#FFFFFF' h={{ base: '75vh', md: '75vh', lg: '85vh' }} w={{ base: '75vh', md: '130vh', lg: '180vh' }} color={"black"}  ml="32px" mr ="32px" mb="62px" boxShadow="0px 4px 20px rgba(133, 133, 133, 0.25)" borderRadius="10px">


        <Box display={"flex"} justifyContent={"space-between"} ml="32px" mr ="32px" mt ="32px">
            <LabelCard name={"Passes Issued"} data={"39,021"}/>
            <LabelCard name={"Passes Refreshed"} data={"113,049"}/>
            <LabelCard name={"Unique Interactions"} data={"1,542"}/>
            <LabelCard name={"Active Passes"} data={"14,042"}/>
        </Box>

        <Box marginTop={"2rem"}>
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