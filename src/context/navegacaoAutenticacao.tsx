// src/context/navegacaoAutenticacao.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAutenticacao } from './contextoAutenticacao';
import Login from '../screens/login';
import NavegadorPrincipal from '../navigation/navegadorPrincipal';

const Stack = createNativeStackNavigator();

export default function NavegacaoAutenticacao() {
  const { usuario } = useAutenticacao();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {usuario ? (
          <Stack.Screen name="Principal" component={NavegadorPrincipal} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
