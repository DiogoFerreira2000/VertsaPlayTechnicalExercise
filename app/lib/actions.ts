'use server';

import { z } from 'zod';
 
const UserSchema = z.object({
  _id: z.string().optional(),
  nome: z.string()
    .min(5, { message: 'O nome deve ter no mínimo 5 caracteres.' })
    .max(50, { message: 'O nome deve ter no máximo 50 caracteres.' }),
  email: z.string()
    .email({ message: 'O email não é válido'}),
  telemovel: z.string()
    .optional()
    .refine((val) => !val || /^[0-9]+$/.test(val), {
      message: 'O número de telemóvel só pode conter dígitos.',
    }),
  cargo: z.string().min(1, { message: 'O cargo é obrigatório.'}),
  senha: z.string(),
  tipo: z.enum(['admin', 'user'], {
    required_error: 'Por favor selecione um tipo de utilizador.',
  })
});

export type State = {
  errors?: {
    _id?: string[] | undefined,
    nome?: string[] | undefined,
    email?: string[] | undefined,
    telemovel?: string[] | undefined,
    cargo?: string[] | undefined,
    senha?: string[] | undefined,
    tipo?: string[] | undefined,
  };
  message?: string | null;
};

export const createAppointment = async (prevState: State, formData: FormData) => {
  const validatedFields = UserSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltam Campos. Não foi possível criar o utilizador.',
      success: false,
    };
  }

  const { nome, email, telemovel, cargo, senha, tipo } = validatedFields.data;

  const utilizador = {
    nome,
    email,
    telemovel: telemovel ?? "",
    cargo,
    senha,
    tipo,
  };

  try {
    const saveUser = async (appointmentData: {
      nome: string; 
      email: string; 
      telemovel: string; 
      cargo: string; 
      senha: string; 
      tipo: "admin" | "user"; 
    }) => {
      const response = await fetch(`http://localhost:3000/api/utilizadores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      if (!response.ok) {
        throw new Error('Falha na criação de utilizador.');
      }
  
      return response.json();
    };

    await saveUser(utilizador);
    return { success: true, errors: {}, message: null };
    
  } catch (error) {
    console.error('Erro na criação de um utilizador:', error);
    return { message: "Falha na criação de um utilizador.", success: false, errors: {} };
  }
};
