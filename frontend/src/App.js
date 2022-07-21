import React from 'react';
import { ChakraProvider, Flex, Spacer, Box, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/400.css'

import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/home';
import Analytics from './components/Analytics/analytics';
import Settings from './components/Settings/settings';

const theme = extendTheme({
  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Work Sans', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router>
            <Flex minH='100vh' bg='#E7E7E7'>
            <Sidebar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            </Flex>
        </Router>
    </ChakraProvider>
  );
}

export default App;
