import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
} from '@chakra-ui/react';
import AuthService from '../../services/AuthService';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(email, password);
      sessionStorage.setItem('token', response.data.token);
      window.location.href = '/home';
    } catch (error) {
      console.error('Erro de autenticação:', error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <VStack spacing={4}>
      <Stack spacing={3}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Erro de Autenticação!</AlertTitle>
          <AlertDescription>Usuário ou senha incorretos.</AlertDescription>
        </Alert>
      )}
    </VStack>
  );
}

export default LoginForm;
