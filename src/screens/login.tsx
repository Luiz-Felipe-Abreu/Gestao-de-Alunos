import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { login } from '../api/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Props = {
  navigation: any;
};


export default function Login({ navigation }: Props) {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');

  const handleLogin = async () => {
    try {
      const { token } = await login(username, password);
      navigation.replace('Principal', { token });
    } catch {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuário" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 4 },
});
