export type Utilizador = {
  _id: string;
  nome: string;
  email: string;
  telemovel: string;
  cargo: string;
  senha: string;
  tipo: 'admin' | 'user';
};

export type Ferias = {
  _id: string;
  nome: string;
  data_inicio: string;
  data_fim: string;
  id_utilizador: string;
};

export type TabelaUtilizadoresUser = {
  nome: string;
  email: string;
  telemovel: string;
  cargo: string;
  tipo: 'admin' | 'user';
};

export type FeriasForm = {
  _id: string;
  nome: string;
  data_inicio: string;
  data_fim: string;
};

export type TabelaUtilizadoresAdmin = {
  _id: string;
  nome: string;
  email: string;
  telemovel: string;
  cargo: string;
  senha: string;
  tipo: 'admin' | 'user';
};

export type TabelaFeriasAdmin = {
  _id: string;
  nome: string;
  data_inicio: string;
  data_fim: string;
  utilizador: string;
  email: string;
}
