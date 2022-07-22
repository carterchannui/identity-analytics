import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";

export default function ImportButton() {
    return (
        <Box>
            <Button
                onClick={() => {
                    loadFile();
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 5000);
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

function collectData(event) {
    // console.log(event.target.result);
    let json = convert(event.target.result);
    let passes_issued = 0;
    let passes_refreshed = 0;
    let actions = 0;

    json.forEach((item) => {
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
    localStorage.setItem("passes_issued", passes_issued);
    localStorage.setItem("passes_refreshed", passes_refreshed);
    localStorage.setItem("total_actions", actions);

    // Store data locally.
    sessionStorage.setItem("passes_issued", passes_issued);
    sessionStorage.setItem("passes_refreshed", passes_refreshed);
    sessionStorage.setItem("total_actions", actions);
}

function loadFile() {
    document.getElementById("input_file").click();
    const input = document.querySelector("input");

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
    };
}

const convert = (data, delimiter = ",") => {
    const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
    return data
        .slice(data.indexOf("\n") + 1)
        .split("\n")
        .map((v) => {
            const values = v.split(delimiter);
            return titles.reduce(
                // eslint-disable-next-line
                (obj, title, index) => ((obj[title] = values[index]), obj),
                {}
            );
        });
};
