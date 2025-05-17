import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function DetalhesAluno({ route }: any) {
  const { aluno } = route.params;

  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: aluno.image }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
          {aluno.firstName} {aluno.lastName}
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
          Dados do Usuário
        </Text>
        <Text>Telefone: {aluno.phone}</Text>
        <Text>Email: {aluno.email}</Text>
        <Text>Gênero: {aluno.gender}</Text>
        <Text>Data de Nascimento: {aluno.birthDate}</Text>
        <Text>
          Endereço: {aluno.address?.address}, {aluno.address?.city} - {aluno.address?.state}
        </Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
          Características
        </Text>
        <Text>Cor dos olhos: {aluno.eyeColor}</Text>
        <Text>Cor do cabelo: {aluno.hair?.color}</Text>
        <Text>Tipo de cabelo: {aluno.hair?.type}</Text>
        <Text>Altura: {aluno.height} cm</Text>
        <Text>Peso: {aluno.weight} kg</Text>
        <Text>Grupo Sanguíneo: {aluno.bloodGroup}</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
          Carteira
        </Text>
        <Text>Moeda: {aluno.bank?.currency}</Text>
        <Text>Tipo de Cartão: {aluno.bank?.cardType}</Text>
        <Text>Número: {aluno.bank?.cardNumber}</Text>
        <Text>Expira: {aluno.bank?.cardExpire}</Text>
        <Text>IBAN: {aluno.bank?.iban}</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
          Empresa
        </Text>
        <Text>Nome: {aluno.company?.name}</Text>
        <Text>Departamento: {aluno.company?.department}</Text>
        <Text>Cargo: {aluno.company?.title}</Text>
        <Text>
          Endereço: {aluno.company?.address?.address}, {aluno.company?.address?.city}
        </Text>
      </View>
    </ScrollView>
  );
}