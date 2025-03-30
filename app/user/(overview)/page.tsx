import { fetchUtilizadoresUser } from '@/app/lib/data';
import TabelaUsers from '@/app/ui/user/tabela-user';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lista de Utilizadores',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const utilizadores = await fetchUtilizadoresUser(query);

  return (
    <main>
      <TabelaUsers users={utilizadores} />
    </main>
  );
}