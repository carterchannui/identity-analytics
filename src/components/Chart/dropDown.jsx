import React from 'react'
import {
    Button,
    Box,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import arrow from "../../assets/Arrow_drop_down_big.webp";

//Dropdown menu
function Dropdown() {

//To-do: add a functionality to the chart to allow the user to change the chart type
const onClick = () => {
    console.log("clicked");
    window.location.reload();
}

  return (
    <Box>
    <Menu>
        <MenuButton
            as={Button}
            colorScheme="white"
            rightIcon={<Image src={arrow} alt="" />}
        ></MenuButton>
        <MenuList>
            <MenuItem onClick={onClick}>
                Passes Issued
            </MenuItem>
            <MenuItem onClick={onClick}>
                Passes Refreshed
            </MenuItem>
            <MenuItem onClick={onClick}>
                Unique Interactions
            </MenuItem>
            <MenuItem onClick={onClick}>
                Active Passes
            </MenuItem>
        </MenuList>
    </Menu>
</Box>
  )
}

export default Dropdown