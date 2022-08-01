// Carter Chan-Nui - Intern
import React from "react";
import Papa from "papaparse";
import { Text, Box, Button } from "@chakra-ui/react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
    passesIssued,
    passesRefreshed,
    uniqueInteractions,
    activeGatekeepers,
    graphData,
    isLoading,
} from "../Atom/atom";
import "./importButton.css";

export default function ImportButton() {
    const setPassesIssued = useSetRecoilState(passesIssued);
    const setPassesRefreshed = useSetRecoilState(passesRefreshed);
    const setActiveGatekeepers = useSetRecoilState(activeGatekeepers);
    const setGraphData = useSetRecoilState(graphData);
    const graphDataState = useRecoilValue(graphData);
    const setIsLoading = useSetRecoilState(isLoading);

    function initJSON() {
        // Allocate space for current months.
        let year = new Array(new Date().getMonth() + 1);
        // Initialize each index in array with month JSON object.
        for (let i = 0; i < year.length; i++) {
            let date = new Date();
            date.setMonth(i, 1);
            // Add month JSON object to array.
            year[i] = {
                month: `${date.toLocaleString("en-US", { month: "short" })}`,
                issued: 0,
                refreshed: 0,
            };
        }
        return year;
    }

    function processTransaction(item, year, counts) {
        // Extract month.
        let month = item.timestamp.split(" ")[0].split("/")[0];
        // Restrict active data to [Jan, <Current Month>].
        if (month <= year.length) {
            if (item.instruction_name === "IssueVanilla") {
                // Update number of issued passes for respective month.
                year[month - 1].issued = year[month - 1].issued + 1;
                // Update total issued gateway passes.
                counts[0] = counts[0] + 1;
            } else if (item.instruction_name === "UpdateExpiry") {
                // Update number of refreshed passes for respective month.
                year[month - 1].refreshed = year[month - 1].refreshed + 1;
                // Update total refreshed gateway passes.
                counts[1] = counts[1] + 1;
            }
        }
    }

    function collectData(results) {
        // Initialize new graph data JSON object.
        let year = initJSON();
        // Track gatekeepers and their activity, <gatekeeper_address, frequency>.
        let gatekeepers = new Map();
        // Track action counts, [issued, refreshed].
        let counts = [0, 0];
        // Track total gateway pass transactions.
        let actions = 0;

        // Iterate through array of JSON objects.
        for (let item of results.data) {
            // Update gatekeeper tracker.
            if (gatekeepers.has(item.gatekeeper_address)) {
                gatekeepers.set(
                    item.gatekeeper_address,
                    gatekeepers.get(item.gatekeeper_address) + 1
                );
            } else {
                gatekeepers.set(item.gatekeeper_address, 1);
            }
            processTransaction(item, year, counts);
            ++actions;
        }

        // Store data locally.
        localStorage.setItem("passes_issued", counts[0]);
        localStorage.setItem("passes_refreshed", counts[1]);
        localStorage.setItem("total_actions", actions);
        localStorage.setItem("active_gatekeepers", gatekeepers.size);
        localStorage.setItem("graphData", year);

        setIsLoading(false);

        // Update respective Atoms.
        setPassesIssued(counts[0]);
        setPassesRefreshed(counts[1]);
        setActiveGatekeepers(gatekeepers.size);
        setGraphData(year);
    }

    function loadFile() {
        document.getElementById("input_file").click();
        const input = document.querySelector("input");

        // CSV->JSON parser configuration.
        let config = {
            header: true,
            complete: function (results, file) {
                console.log("Parsing complete:", results, file);
                collectData(results);
            },
        };

        // Validate file picker input.
        input.onchange = () => {
            if (input.files.length === 0) {
                console.log("No file selected for upload.");
            } else {
                setIsLoading(true);
                const selectedFile = input.files[0];
                console.log(`Loaded ${selectedFile.name}`);
                // Parse input file.
                Papa.parse(selectedFile, config);
            }
        };
    }

    return (
        <Box
        data-testid="importButton"
        >
            <Button
                onClick={() => {
                    loadFile();
                }}
                id="get_file"
                colorScheme="messenger"
                size="lg"
                w="250px"
            >
                <Text>Import CSV</Text>
            </Button>
            <input type="file" id="input_file" />
        </Box>
    );
}
