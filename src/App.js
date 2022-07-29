import React from "react";
import { ChakraProvider, extendTheme, Flex, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/400.css";

import Sidebar from "./components/Sidebar/sidebar";
import Home from "./components/Home/home";
import Analytics from "./components/Analytics/analytics";
import Settings from "./components/Settings/settings";
import { RecoilRoot } from "recoil";

//chakra UI custom theme
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
//entry point for the app
export default function App() {
    return (
        <ChakraProvider theme={theme}>
            {/*chakra UI theme*/}
            <Router>
                <Box display="flex" backgroundColor={"#E7E7E7"} minH="100vh">
                    <RecoilRoot>
                        {/*recoil global state set up*/}
                        <Sidebar />
                        <Routes>
                            {/*react-router*/}
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
