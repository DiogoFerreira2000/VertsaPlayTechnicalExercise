import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabelaFerias from "../ui/admin/tabela-ferias";
import { fetchFeriasAdmin } from "../lib/data";
import Search from "../ui/search";
import { lusitana } from "../ui/fonts";
import { Suspense } from "react";
import { CriarUtilizador } from "../ui/admin/buttons";
import { AppointmentsTableSkeleton } from "../ui/skeletons";
import TabelaUtilizadores from "../ui/admin/tabela-utilizadores";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const ferias = await fetchFeriasAdmin(query);

  return (
    <Tabs defaultValue="users" className="w-full">
      <TabsList>
        <TabsTrigger value="users">Utilizadores</TabsTrigger>
        <TabsTrigger value="ferias">Férias</TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Lista de utilizadores</h1>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search appointments..." />
            <CriarUtilizador />
          </div>
          <Suspense key = {query} fallback={<AppointmentsTableSkeleton />}>
            <TabelaUtilizadores query={query} />
          </Suspense>
        </div>
      </TabsContent>
      <TabsContent value="ferias">
        <main>
          <TabelaFerias ferias={ferias} />
        </main>
      </TabsContent>
    </Tabs>
  );
}