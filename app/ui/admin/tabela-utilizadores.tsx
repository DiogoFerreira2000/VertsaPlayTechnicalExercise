import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { ApagarUtilizador } from './buttons';
import { fetchUtilizadoresAdmin } from '@/app/lib/data';

export default async function TabelaUtilizadores({
  query,
}: {
  query: string;
}) {
  const utilizadores = await fetchUtilizadoresAdmin(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {utilizadores?.map((user: {
              _id: string;
              nome: string;
              email: string;
              telemovel: string;
              cargo: string;
              senha: string;
              tipo: 'admin' | 'user';
            }) => (
              <div
                key={user._id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-lg text-gray-500">{user.nome}</p> 
                    <p className="text-lg text-gray-500">{user.email}</p> 
                    <p className="text-lg text-gray-500">{user.telemovel}</p>
                    <p className="text-lg font-gray-500">{user.cargo}</p> 
                    <p className="text-lg font-gray-500">{user.senha}</p> 
                    <p className="text-lg font-gray-500">{user.tipo}</p> 
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <ApagarUtilizador id={user._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
              <thead className="rounded-md bg-gray-50 text-left text-lg font-normal">
                <tr>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Nome
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Número de telemóvel
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Cargo
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Senha
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Tipo de utilizador
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Remover</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {utilizadores.map((user: {
                  _id: string;
                  nome: string;
                  email: string;
                  telemovel: string;
                  cargo: string;
                  senha: string;
                  tipo: 'admin' | 'user';
                }) => (
                  <tr key={user._id} className="group">
                    <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                      {user.nome}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {user.telemovel}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {user.cargo}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {user.senha}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {user.tipo}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <ApagarUtilizador id={user._id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
