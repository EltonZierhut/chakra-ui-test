import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import AuthService from '../../services/AuthService';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(email, password);
      console.log('Token JWT recebido:', response.data.token);
      // Aqui você pode adicionar lógica para armazenar o token em um estado global ou local.
    } catch (error) {
      console.error('Erro de autenticação:', error);
    }
  };

  return (
    <Stack spacing={3}>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </Stack>
  );
}

export default LoginForm;
