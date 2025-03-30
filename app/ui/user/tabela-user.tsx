import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { TabelaUtilizadoresUser } from '@/app/lib/definitions';

export default async function TabelaUsers({
  users,
}: {
  users: TabelaUtilizadoresUser[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Utilizadores
      </h1>
      <Search placeholder="Pesquisar utilizadores..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {users?.map((user) => (
                  <div
                    key={user.email}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="border-b pb-4">
                      <p className="text-lg text-gray-500">{user.nome}</p> 
                      <p className="text-lg text-gray-500">{user.email}</p> 
                      <p className="text-lg text-gray-500">{user.telemovel}</p>
                      <p className="text-lg font-gray-500">{user.cargo}</p> 
                      <p className="text-lg text-gray-500">{user.tipo}</p>
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
                      Tipo de utilizador
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {users.map((user) => (
                    <tr key={user.email} className="group">
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
                        {user.tipo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
