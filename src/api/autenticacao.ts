export async function loginUsuario(email: string, senha: string) {
  const resposta = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: email, password: senha })
  });

  if (!resposta.ok) throw new Error('Erro no login');

  return resposta.json();
}

export async function buscarAlunos(token: string) {
  const resposta = await fetch('https://dummyjson.com/users', {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!resposta.ok) throw new Error('Erro ao buscar alunos');

  const dados = await resposta.json();
  return dados.users;
} 