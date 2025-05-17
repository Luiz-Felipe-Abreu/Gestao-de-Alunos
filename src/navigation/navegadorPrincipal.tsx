import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaAlunos from '../screens/listaAlunos';
import Configuracoes from '../screens/configuracoes';

const Tab = createBottomTabNavigator();

export default function NavegadorPrincipal() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Alunos" component={ListaAlunos} />
      <Tab.Screen name="Configurações" component={Configuracoes} />
    </Tab.Navigator>
  );
}