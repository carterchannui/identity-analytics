import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/home';
import Analytics from './components/Analytics/analytics';
import Settings from './components/Settings/settings';

/*
 * Create Conatainer with a horizontal flex layout that has the Sidebar and the main section.
 * Main section is going to have flex-grow.
 * Sidebar will have flex-shrink to fixed size and will have fertical flex layout with contents aligned to the start and justife-content to center.
 * Main should also contain vertical flex layout and have horizontal flex with flex-shrink for the title and svg submit button
 */

/*
 * Uses React Router to render the correct component based on the URL.
 * Uses Flex to layout the components.
 * Uses ChakraProvider to set the theme.
 */

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex minH="100vh">
          <Sidebar />
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
