import React from "react";

import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/400.css";

import Sidebar from "./components/Sidebar/sidebar";
import Home from "./components/Home/home";
import Analytics from "./components/Analytics/analytics";
import Settings from "./components/Settings/settings";
import { RecoilRoot } from "recoil";

const theme = extendTheme({
    fonts: {
        heading: `Work Sans, sans-serif`,
        body: `Work Sans, sans-serif`,
    },
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Box display="flex" bg="#E7E7E7">
                    <RecoilRoot>
                        <Sidebar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </RecoilRoot>
                </Box>
            </Router>
        </ChakraProvider>
    );
}

export default App;
