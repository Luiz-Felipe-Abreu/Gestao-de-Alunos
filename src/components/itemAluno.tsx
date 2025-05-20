import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export type ItemAlunoProps = {
  nome: string;
  avatar: string;
};

export default function ItemAluno({ nome, avatar }: ItemAlunoProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
});