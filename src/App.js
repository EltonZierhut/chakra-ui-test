import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LoginForm } from './pages/LoginForm';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { RestrictArea } from './components/RestrictArea';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <BrowserRouter>
              <Routes>
                <Route path="login" element={<LoginForm />} />
                <Route
                  path="home"
                  element={
                    <RestrictArea>
                      <Home />
                    </RestrictArea>
                  }
                />
                <Route path="*" element={<LoginForm />} />
              </Routes>
            </BrowserRouter>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
