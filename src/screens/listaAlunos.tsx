// src/screens/ListaAlunos.tsx

import React from 'react';
import { View, FlatList } from 'react-native';
import ItemAluno from '../components/itemAluno';

const ListaAlunos = ({ alunos }: any) => {
  return (
    <View>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemAluno aluno={item} />}
      />
    </View>
  );
};

export default ListaAlunos;
