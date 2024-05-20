import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const money = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const dateBrMask = (date: string): string => {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(date)) {
    throw new Error('Formato de data inválido. Use o formato yyyy-MM-dd.')
  }

  const [ano, mes, dia] = date.split('-')
  return `${dia}/${mes}/${ano}`
}

export const translateURLName = (url: string): string => {
  const routes: { [key: string]: string } = {
    '/': 'Home',
    '/person': 'Membros',
    '/dizimo': 'Dízimos',
    '/offer': 'Ofertas',
    '/releases': 'Lançamentos'
  }

  return routes[url] ?? ''
}
