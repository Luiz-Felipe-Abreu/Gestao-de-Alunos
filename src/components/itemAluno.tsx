import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/navigation'; // caminho para seu StackParamList

type NavigationProp = StackNavigationProp<StackParamList, 'detalhesAlunos'>;

interface ItemAlunoProps {
  aluno: any; // ou use o tipo "Aluno" se já estiver definido corretamente
}

const ItemAluno: React.FC<ItemAlunoProps> = ({ aluno }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('detalhesAlunos', { aluno });
  };

  return (
    <TouchableOpacity style={estilos.container} onPress={handlePress}>
      <Image source={{ uri: aluno.image }} style={estilos.imagem} />
      <Text style={estilos.nome}>
        {aluno.firstName} {aluno.lastName}
      </Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  imagem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
  },
});

export default ItemAluno;
