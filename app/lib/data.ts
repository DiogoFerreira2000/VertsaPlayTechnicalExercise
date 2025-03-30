import {
  Utilizador,
  Ferias,
  TabelaUtilizadoresUser,
  TabelaUtilizadoresAdmin,
  FeriasForm,
  TabelaFeriasAdmin
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUtilizadoresUser(query: string) {
  noStore();

  try {
    const utilizador_res = await fetch('http://localhost:3000/api/utilizadores');
    if (!utilizador_res.ok) {
      throw new Error(`HTTP error! Status: ${utilizador_res.status}`);
    }
    const users = await utilizador_res.json();
    
    const utilizadoresTabelaUser = users
    .filter((user: Utilizador) => 
      user.nome.includes(query) || user.email.includes(query) || user.cargo.includes(query)
    )
    .map((user: Utilizador): TabelaUtilizadoresUser => {
      return {
        nome: user.nome,
        email: user.email,
        telemovel: user.telemovel,
        cargo: user.cargo,
        tipo: user.tipo,
      };
    });

    return utilizadoresTabelaUser;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Erro na criação da lista de utilizadores.');
  }
}


export async function fetchFeriasPorId(id: string) {
  noStore();

  try {
    const ferias_res = await fetch('http://localhost:3000/api/ferias');
    if (!ferias_res.ok) {
      throw new Error(`HTTP error! Status: ${ferias_res.status}`);
    }
    const ferias = await ferias_res.json();

    const feriasFiltradas = ferias
    .filter((fe: Ferias) =>
      fe._id.includes(id)
    )
    .map((fe: Ferias): FeriasForm => {
      return {
        _id: fe._id,
        nome: fe.nome,
        data_inicio: fe.data_inicio,
        data_fim: fe.data_fim,
      }
    });

    return feriasFiltradas[0];

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch appointment.');
  }
}


export async function fetchUtilizadoresAdmin(query: string) {
  noStore();

  try {
    const utilizador_res = await fetch('http://localhost:3000/api/utilizadores');
    if (!utilizador_res.ok) {
      throw new Error(`HTTP error! Status: ${utilizador_res.status}`);
    }
    const users = await utilizador_res.json();
    
    const utilizadoresTabelaAdmin = users
    .filter((user: Utilizador) => 
      user.nome.includes(query) || user.email.includes(query) || user.cargo.includes(query)
    )
    .map((user: Utilizador): TabelaUtilizadoresAdmin => {
      return {
        _id: user._id,
        nome: user.nome,
        email: user.email,
        telemovel: user.telemovel,
        cargo: user.cargo,
        senha: user.senha,
        tipo: user.tipo,
      };
    });

    return utilizadoresTabelaAdmin;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Erro na criação da tabela de utilizadores no painel do administrador.');
  }
}


export async function fetchFeriasAdmin(query: string) {
  noStore();

  try {
    const utilizador_res = await fetch('http://localhost:3000/api/utilizadores');
    if (!utilizador_res.ok) {
      throw new Error(`HTTP error! Status: ${utilizador_res.status}`);
    }
    const users = await utilizador_res.json();

    const ferias_res = await fetch('http://localhost:3000/api/ferias');
    if (!ferias_res.ok) {
      throw new Error(`HTTP error! Status: ${ferias_res.status}`);
    }
    const ferias = await ferias_res.json();

    const nomeUtilizadores: Record<string, string> = {};
    const emailUtilizadores: Record<string, string> = {};
    users.forEach((user: Utilizador) => {
      nomeUtilizadores[user._id] = user.nome;
      emailUtilizadores[user._id] = user.email;
    });
    
    const feriasTodas = ferias
    .filter((fe: Ferias) =>
      fe.nome.includes(query) || nomeUtilizadores[fe.id_utilizador].includes(query) || emailUtilizadores[fe.id_utilizador].includes(query)
    )
    .map((fe: Ferias): TabelaFeriasAdmin => {
      const nomeUtilizador = nomeUtilizadores[fe.id_utilizador];
      const emailUtilizador = emailUtilizadores[fe.id_utilizador];
        
      const inicio = new Date(fe.data_inicio);
      const fim = new Date(fe.data_fim);

      const inicioFerias = inicio.toISOString().split('T')[0];
      const fimFerias = fim.toISOString().split('T')[0];

      return {
        _id: fe._id,
        nome: fe.nome,
        data_inicio: inicioFerias,
        data_fim: fimFerias,
        utilizador: nomeUtilizador,
        email: emailUtilizador,
      }
    });

    return feriasTodas;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Erro na criação da tabela de utilizadores no painel do administrador.');
  }
}
