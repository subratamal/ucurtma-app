import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../../ui/container';
import DonateProgress from '../../ui/donate-progress';
import LandingPaymentFlow from '../../ui/landing-payment-flow';

function DonatePage() {
  return (
    <Container
      maxW={{ base: 'full', sm: 'container.sm', md: 'container.md' }}
      px={{ base: 4, lg: 0 }}
      flexDir="column"
    >
      <Flex m="0 auto" align="center" direction="column" textAlign="center">
        <Heading as="h2" fontSize="2xl">
          Tüm kampanyalara destek ol
        </Heading>
        <Text maxW={770} mt={8}>
          Dünyayı daha renkli bir yere dönüştürmemiz için desteğine ihtiyacımız
          var. İstersen buradaki seçenekleri kullanarak Uçurtma Projesinde
          bulunan bütün kampanyalara destekçi olabilirsin.
        </Text>
      </Flex>
      <Box mt={14}>
        <DonateProgress />
      </Box>
      <Box mt={165}>
        <LandingPaymentFlow />
      </Box>
    </Container>
  );
}

export default DonatePage;
