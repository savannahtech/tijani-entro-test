import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import { CREATE_TASK } from './contants/routesName';
import CreateTask from './pages/Task/CreateTask';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={CREATE_TASK} element={<CreateTask />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
