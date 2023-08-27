import { Box, Container, Text, Tab, TabList, TabPanel, Tabs, TabPanels } from '@chakra-ui/react';
import React from 'react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Homepage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);


  return (
    <Container maxW='xl' centerContent>
    <Box
        d="flex"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
         
    >
        <Text fontSize={30} fontFamily="Work sans" fontWeight="extrabold"></Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
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
    </Container>
  )
}

export default Homepage