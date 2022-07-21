import React from 'react'
import { Box, Flex, Spacer, Center, Button, Text, VStack, Grid, GridItem, Wrap, WrapItem} from '@chakra-ui/react'
import '../Analytics/analytics.css';
import StatBox from  "../Analytics/statbox";
import Topbar from '../Topbar/topbar'
import Chart from '../Chart/chart';


export default function Analytics() {
    return (

        <VStack w='100%' h='100%' align='left' mx='16' my='8'>
            <Topbar title='Analytics'/>
            <Flex 
                bg='#FFFFFF' 
                h='100%' 
                w='100%'
                p='4' 
                m='8' 
                borderRadius="10px"
                border='2px'
                borderColor='#A3A4AB'
                direction='column'
            >
                    <Flex align='center' w='100%'>
                            <StatBox label='Passes Issued' data={20000}/>
                            <Spacer/>
                            <StatBox label='Passes Refreshed' data={20000}/>
                            <Spacer/>
                            <StatBox label='Unique Interactions' data={20000}/>
                            <Spacer/>
                            <StatBox label='Active Passes' data={20000}/>
                    </Flex>
            </Flex>
            <Flex 
                bg='#FFFFFF' 
                h='100%' 
                w='100%'
                p='4' 
                m='8' 
                borderRadius="10px"
                border='2px'
                borderColor='#A3A4AB'
                direction='column'
            >
                <Flex direction='column'>
                    {/* Data Visual Goes Here */}
                    <Chart/>
                </Flex>
            </Flex>

            
        </VStack>

        /*
        <Flex w='100%' h='100%'>
            <Grid
                templateAreas={
                        `"header"
                          "main"
                          "footer"`
                }
                gridTemplateRows={'100% 100%'}
                gridTemplateColumns={'100%'}
                w='100%'
                h='100%'
                color='blackAlpha.700'

            >
                <GridItem bg='orange.300' area={'header'}>
                    <Flex>
                    <Topbar title='Analytics'/>
                    <Spacer/>
                    <Box bg='green.300'> Test TESST </Box>
                    </Flex>
                </GridItem>
                <GridItem bg='green.300' area={'main'}>
                    <Flex 
                        bg='#FFFFFF' 
                        h='100%' 
                        p='4' 
                        m='8' 
                        borderRadius="10px"
                        border='2px'
                        borderColor='#A3A4AB'
                    >
                            <Flex w='100%'>
                                <StatBox label='Passes Issued' data={20000}/>
                                <Spacer/>
                                <StatBox label='Passes Refreshed' data={20000}/>
                                <Spacer/>
                                <StatBox label='Unique Interactions' data={20000}/>
                                <Spacer/>
                                <StatBox label='Active Passes' data={20000}/>
                            </Flex>
                    </Flex>
                </GridItem>
                <GridItem bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>
        </Flex>
            */
  );
}


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
