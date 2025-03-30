import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { TabelaFeriasAdmin } from '@/app/lib/definitions';

export default async function TabelaFerias({
  ferias,
}: {
  ferias: TabelaFeriasAdmin[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Férias de todos os utilizadores
      </h1>
      <Search placeholder="Pesquisar férias..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {ferias?.map((fe) => (
                  <div
                    key={fe._id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="border-b pb-4">
                      <p className="text-lg text-gray-500">{fe.nome}</p> 
                      <p className="text-lg text-gray-500">{fe.data_inicio}</p> 
                      <p className="text-lg text-gray-500">{fe.data_fim}</p>
                      <p className="text-lg font-gray-500">{fe.utilizador}</p> 
                      <p className="text-lg text-gray-500">{fe.email}</p>
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
                      Data de início
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Data de fim
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Nome do utilizador
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email do utilizador
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {ferias.map((fe) => (
                    <tr key={fe._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        {fe.nome}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {fe.data_inicio}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {fe.data_fim}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {fe.utilizador}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {fe.email}
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
