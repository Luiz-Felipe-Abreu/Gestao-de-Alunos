import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ItemAluno from '../components/itemAluno';
import { buscarAlunos } from '../api/autenticacao';
import { useAutenticacao } from '../context/contextoAutenticacao';

export default function ListaAlunos({ navigation }: any) {
  const [lista, setLista] = useState<any[]>([]);
  const { usuario } = useAutenticacao();

  useEffect(() => {
    buscarAlunos(usuario!.token)
      .then((resposta) => setLista(resposta))
      .catch(() => {});
  }, []);

  return (
    <FlatList
      data={lista}
      keyExtractor={(aluno) => aluno.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { aluno: item })}>
          <ItemAluno nome={item.firstName + ' ' + item.lastName} avatar={item.image} />
        </TouchableOpacity>
      )}
    />
  );
}
