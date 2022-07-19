import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box, Heading, Text, Image, Spacer } from '@chakra-ui/react';
import arrow from '../../assets/Arrow_drop_down_big.webp';

const pdata = [
  {
    name: 'Jan',
    data: 500,
    key: 200,
    refreshment: 200,
  },
  {
    name: 'Feb',
    data: 400,
    key: 450,
    refreshment: 300,
  },
  {
    name: 'Mar',
    data: 300,
    key: 200,
    refreshment: 150,
  },
  {
    name: 'Apr',
    data: 200,
    key: 500,
    refreshment: 350,
  },
  {
    name: 'Jun',
    data: 100,
    key: 100,
    refreshment: 250,
  },
  {
    name: 'Jul',
    data: 0,
    key: 300,
    refreshment: 450,
  },
];

function Chart() {
  const date = new Date();
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
        <Box ml={'3rem'}>
          <Heading size="md">Gateway Activity</Heading>
          <Heading mt="10px" mb="10px" size="sm" textColor="#9FA2B4">
            as of {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </Heading>
        </Box>
        
        <Box display={'flex'} gap={'20px'}>
          <Box display={'flex'} gap={'5px'}>
            <Box>
              <Box
                border={'2px solid blue'}
                width="2rem"
                display="inline-block"
              />
            </Box>
            <Box>
              <Text>Issuance</Text>
            </Box>
          </Box>

          <Box display={'flex'} gap={'5px'}>
            <Box>
              <Box
                border={'2px solid grey'}
                width="2rem"
                display="inline-block"
              ></Box>
            </Box>
            <Box>
              <Text>Refreshment</Text>
            </Box>
            <Spacer w="5vh" />
            <Box>
              <Image src={arrow} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>

      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={250}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          {/*<Line type="monotone" dataKey="data" stroke="blue" activeDot={{ r: 8 }} />*/}
          <Line
            type="monotone"
            dataKey="key"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="refreshment"
            stroke="grey"
            activeDot={{ r: 8 }}
          />
          {/*<Line type="monotone" dataKey="name" stroke="blue" activeDot={{ r: 8 }} />*/}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={'preserveStartEnd'}
            tickFormatter={(value) => value}
          />
          <YAxis dataKey={'data'} />
          <Tooltip contentStyle={{ backgroundColor: 'blue', color: 'white' }} />
          {/*<Legend />*/}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart;
