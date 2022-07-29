import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Box, Heading, Text, Spacer } from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { graphData } from "../Atom/atom";

//Chart component for displaying the data of the passes issued as a graph using recharts
export default function Chart() {
    // setting a current date
    const date = new Date();

    /**
     * The data of the passesIssuedData is fetched from the atom and stored in the state of passesIssuedData1
     * @param {String} passesIssuedData array of graph data for rendering the LineChart
     */

    const [graphData1] = useRecoilState(graphData);

    return (
        <Box
            data-testid="chart"
            // p={8}
            border="2px"
            borderColor="#A3A4AB"
            borderRadius="10px"
            boxShadow="0px 4px 4px 0px rgba(0,0,0,0.30);"
            m={5}
        >
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"100%"}
                mt="1vh"
            >
                <Box ml={"2rem"}>
                    <Heading fontSize={{ sm: "10px", md: "14px", lg: "18px" }}>
                        Gateway Activity
                    </Heading>
                    <Heading mt="10px" mb="10px" size="sm" textColor="#9FA2B4">
                        {" "}
                        {/* Display Current Date  */}
                        as of {date.getDate()}/{date.getMonth()}/
                        {date.getFullYear()}
                    </Heading>
                </Box>
                <Box display={"flex"} gap={"20px"}>
                    <Box display={"flex"} gap={"5px"}>
                        <Box>
                            <Box>
                                <Box
                                    border={"2px solid blue"}
                                    width="2rem"
                                    display="inline-block"
                                />
                            </Box>
                            <Text
                                fontSize={{ sm: "8px", md: "14px", lg: "18px" }}
                            >
                                Issuance
                            </Text>
                        </Box>
                    </Box>

                    <Box display={"flex"} gap={"5px"}>
                        <Box>
                            <Box>
                                <Box
                                    border={"2px solid grey"}
                                    width="2rem"
                                    display="inline-block"
                                ></Box>
                            </Box>
                            <Text
                                fontSize={{ sm: "8px", md: "14px", lg: "18px" }}
                            >
                                Refreshment
                            </Text>
                        </Box>
                        <Spacer w="5vh" />

                        {/* Dropdown component to allow the user to change the chart type */}
                    </Box>
                </Box>
            </Box>
            {/*ReponsiveContainer is used to make the graph responsive to the screen size*/}
            <ResponsiveContainer width="100%" aspect={3}>
                {/*LineChart is used to render the graph*/}
                <LineChart
                    data={graphData1}
                    width={500}
                    height={250}
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                    {/*Line is used to render the blue line*/}
                    <Line
                        type="monotone"
                        dataKey="issued"
                        stroke="blue"
                        activeDot={{ r: 8 }}
                    />
                    {/*Line is used to render the grey line*/}
                    <Line
                        type="monotone"
                        dataKey="refreshed"
                        stroke="grey"
                        activeDot={{ r: 8 }}
                    />
                    {/*CartesianGrid is used to render the grid lines*/}
                    <CartesianGrid strokeDasharray="3 3" />
                    {/*XAxis is used to render the x-axis*/}
                    <XAxis
                        dataKey="name"
                        interval={"preserveStartEnd"}
                        tickFormatter={(value) => value}
                    />
                    {/*YAxis is used to render the y-axis*/}
                    <YAxis />
                    {/*Tooltip is used to view the content dynamically*/}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "white",
                            color: "blue",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
}
