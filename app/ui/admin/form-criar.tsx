'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createAppointment, State } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CriarUtilizadorForm() {
  const initialState: State = {
    errors: {
      nome: [],
      email: [],
      telemovel: [],
      cargo: [],
      senha: [],
      tipo: [],
    },
    message: ''
  };

  const [state, setState] = useState<State>(initialState);
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (result?.success) {
      router.push('/admin');
    } else if (result) {
      setState(prevState => ({
        ...prevState,
        errors: result.errors,
        message: result.message
      }));
    }
  }, [result, router]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const submitForm = async () => {
      const res = await createAppointment(state, formData);
      setResult(res);
    };

    submitForm();
  };
}