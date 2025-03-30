'use client';

import { useRouter } from 'next/navigation';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CriarUtilizador() {
  return (
    <Link
      href="/admin/utilizadores/criar"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Criar</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}


export function ApagarUtilizador({ id }: { id: string }) {
  const router = useRouter();

  const apagarUtilizador = async () => {
    const confirmed = confirm("Tem a certeza?");
 
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/utilizadores?_id=${id}`, {
        method: "DELETE",
      });
 
      if (res.ok) {
        router.refresh();
      }
    }
  };
 
  return (
    <button 
      onClick={apagarUtilizador} 
      className="flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <span className="hidden md:block">Apagar</span>{' '}
      <TrashIcon className="h-5 md:ml-4" />
    </button>
  );
}
