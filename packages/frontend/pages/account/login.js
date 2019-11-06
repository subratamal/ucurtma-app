import React from 'react';
import { Flex, Box, Link } from '@chakra-ui/core';
import WaitingForYou from '../../components/illustrations/waiting-for-you';
import Header from '../../components/header';
import LoginForm from '../../components/forms/login-form';
import Container from '../../components/ui/container';

function Signup() {
  return (
    <>
      <Header />
      <Container>
        <Flex
          justify="center"
          align="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box w="100%" bg="white" borderRadius="md" boxShadow="cardLight">
            <Box py={8} px={10}>
              <LoginForm withTitle />
            </Box>
            <Box>
              <Flex align="center" pl={10} height="5rem" background="#FBFBFB">
                <Box>
                  Have an account?
                  <Link pl={2} color="linkBlue" href="#">
                    Log in.
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box w="100%" pl={{ lg: 12, sm: 0 }} mt={{ lg: 0, sm: 4 }}>
            <WaitingForYou />
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default Signup;
