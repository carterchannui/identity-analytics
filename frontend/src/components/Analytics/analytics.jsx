import React from 'react';
import { Flex, Spacer, Center, Button, Text, Box } from '@chakra-ui/react';
import Card from '../Card/card';
import '../Analytics/analytics.css';

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

// Temporarily removed the Card component as it doesn't allow you to encapsulate other components.
function Analytics() {
  return (
    <Flex direction='column' bg='#F8F8F8' h='auto' w='auto' color='white' >
        <Topbar/>
        <Box bg='tomato'> { sessionStorage.getItem("passes_issued") } </Box>
    </Flex>
  )
}

function Topbar() {
  
    return (
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
     );
}

export default Analytics
