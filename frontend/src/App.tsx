import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import { GlobalProvider } from './context/global';

const App = () => {
  return (
    <ChakraProvider>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </ChakraProvider>
  );
};

export default App;
