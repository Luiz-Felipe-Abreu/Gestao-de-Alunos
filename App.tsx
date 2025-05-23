import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import DetalhesAluno from './src/screens/detalhesAlunos';
import NavegadorPrincipal from './src/navigation/navegadorPrincipal';
import { ProvedorAutenticacao } from './src/context/contextoAutenticacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProvedorAutenticacao>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Principal" component={NavegadorPrincipal} />
          <Stack.Screen name="Detalhes" component={DetalhesAluno} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProvedorAutenticacao>
  );
}
