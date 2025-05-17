import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useAutenticacao } from '../context/contextoAutenticacao';
import { loginUsuario } from '../api/autenticacao';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('kminchelle');
  const [senha, setSenha] = useState('0lelplR');
  const { login } = useAutenticacao();

  const handleLogin = async () => {
    try {
      const dados = await loginUsuario(email, senha);
      login(dados.token, dados.firstName);
      navigation.replace('Principal');
    } catch (err) {
      Alert.alert('Erro', 'Falha no login');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Usuário" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}