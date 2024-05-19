import { z } from "zod"

export const schemaPerson = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  entry_date: z.string().min(1, 'Data de entrada é obrigatória'),
  role: z.string().min(1, 'Cargo é obrigatório'),
})

export type FormPerson = z.infer<typeof schemaPerson>

export const initValues = {
  name: '',
  entry_date: '',
  role: ''
}
