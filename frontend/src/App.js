import React from 'react';
import { 
  ChakraProvider, 
  theme 
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Analytics from './components/Analytics/analytics';

function App() {
  return (
      <ChakraProvider theme={theme}>
         <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/analytics" element={<Analytics />} />
              </Routes>
          </Router>
      </ChakraProvider>
);
}

export default App;
