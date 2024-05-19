import { z } from "zod"

export const schemaDizimo = z.object({
  person_id: z.string().min(1, 'Membro é obrigatório'),
  date: z.string().min(1, 'Data é obrigatória'),
  value: z.string().min(1, 'Valor é obrigatório')
})

export type FormDizimo = z.infer<typeof schemaDizimo>

export const initValues = {
  person_id: '',
  date: '',
  value: ''
}
