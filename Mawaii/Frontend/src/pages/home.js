import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "./logo.png";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/signup";

function Home() {
  return (
    <Container
      className="home"
      display="flex"
      justifyContent="space-evenly"
      height="100vh">
      <Box
        className="left"
        width="40%"
        padding="20px"
        flex="1"
        boxSizing="border-box" // Include padding and border in the width
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Box fontSize="20px">
          <img src={logo} />
          <h1>Making communication convenient</h1>
        </Box>
      </Box>
      <Box
        className="right"
        width="50%"
        padding="20px"
        flex="1" // Allow the container to grow but not shrink
        boxSizing="border-box" // Include padding and border in the width
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginLeft="0px" // Adding margin to create space between containers
      >
        <Box>
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
