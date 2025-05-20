import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { buscarAlunoPorId } from '../api/api';
import { Aluno } from '../types/Aluno';

export default function DetalhesAlunos() {
  const route = useRoute();
  const { id } = route.params as { id: number };

  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarAlunoPorId(id)
      .then(setAluno)
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;
  if (!aluno) return <Text>Erro ao carregar aluno</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: aluno.image }} style={styles.image} />
        <Text style={styles.nome}>{aluno.firstName} {aluno.lastName}</Text>
        <Text style={styles.item}>Nome de solteiro: {aluno.maidenName}</Text>
        <Text style={styles.item}>Gênero: {aluno.gender}</Text>
        <Text style={styles.item}>Nascimento: {aluno.birthDate}</Text>
        <Text style={styles.item}>Idade: {aluno.age}</Text>
        <Text style={styles.item}>Email: {aluno.email}</Text>
        <Text style={styles.item}>Telefone: {aluno.phone}</Text>
        <Text style={styles.item}>Username: {aluno.username}</Text>
        <Text style={styles.item}>Senha: {aluno.password}</Text>
        <Text style={styles.item}>Tipo sanguíneo: {aluno.bloodGroup}</Text>
        <Text style={styles.item}>Altura: {aluno.height} cm</Text>
        <Text style={styles.item}>Peso: {aluno.weight} kg</Text>
        <Text style={styles.item}>Cor dos olhos: {aluno.eyeColor}</Text>
        <Text style={styles.item}>Cabelo: {aluno.hair.color} ({aluno.hair.type})</Text>
        <Text style={styles.item}>IP: {aluno.ip}</Text>
        <Text style={styles.item}>MAC Address: {aluno.macAddress}</Text>
        <Text style={styles.item}>Universidade: {aluno.university}</Text>
        <Text style={styles.item}>Endereço: {aluno.address.address}, {aluno.address.city}, {aluno.address.state} - {aluno.address.stateCode}, {aluno.address.postalCode}</Text>
        <Text style={styles.item}>País: {aluno.address.country}</Text>
        <Text style={styles.item}>Localização: {aluno.address.coordinates.lat}, {aluno.address.coordinates.lng}</Text>
        <Text style={styles.item}>Empresa: {aluno.company.name}</Text>
        <Text style={styles.item}>Departamento: {aluno.company.department}</Text>
        <Text style={styles.item}>Cargo: {aluno.company.title}</Text>
        <Text style={styles.item}>Endereço empresa: {aluno.company.address.address}, {aluno.company.address.city}, {aluno.company.address.state}</Text>
        <Text style={styles.item}>Banco:</Text>
        <Text style={styles.subItem}> - Cartão: {aluno.bank.cardNumber}</Text>
        <Text style={styles.subItem}> - Tipo: {aluno.bank.cardType}</Text>
        <Text style={styles.subItem}> - Expira: {aluno.bank.cardExpire}</Text>
        <Text style={styles.subItem}> - Moeda: {aluno.bank.currency}</Text>
        <Text style={styles.subItem}> - IBAN: {aluno.bank.iban}</Text>
        <Text style={styles.item}>Criptomoeda:</Text>
        <Text style={styles.subItem}> - Moeda: {aluno.crypto.coin}</Text>
        <Text style={styles.subItem}> - Wallet: {aluno.crypto.wallet}</Text>
        <Text style={styles.subItem}> - Rede: {aluno.crypto.network}</Text>
        <Text style={styles.item}>EIN: {aluno.ein}</Text>
        <Text style={styles.item}>SSN: {aluno.ssn}</Text>
        <Text style={styles.item}>User Agent: {aluno.userAgent}</Text>
        <Text style={styles.item}>Função: {aluno.role}</Text>
        <Text style={styles.item}>Altura: {aluno.height} cm</Text>
        <Text style={styles.item}>Peso: {aluno.weight} kg</Text>
        <Text style={styles.item}>Grupo Sanguíneo: {aluno.bloodGroup}</Text>
        <Text style={styles.item}>Olhos: {aluno.eyeColor}</Text>
        <Text style={styles.item}>Cabelo: {aluno.hair.color}, {aluno.hair.type}</Text>
        <Text style={styles.item}>Departamento: {aluno.company.department}</Text>
        <Text style={styles.item}>Cargo: {aluno.company.title}</Text>
        <Text style={styles.item}>Banco: {aluno.bank.cardType} - {aluno.bank.cardNumber}</Text>
        <Text style={styles.item}>Criptomoeda: {aluno.crypto.coin} - {aluno.crypto.wallet}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'flex-start' },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10, alignSelf: 'center' },
  nome: { fontSize: 22, fontWeight: 'bold', alignSelf: 'center' },
  item: { marginTop: 10, fontSize: 16, fontWeight: '500' },
  subItem: { marginLeft: 15, fontSize: 15, color: '#555' }
});
