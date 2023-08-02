import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';

const Home = () => {
  return <Container>Home Page</Container>;
};

const App = () => {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
};

export default App;
