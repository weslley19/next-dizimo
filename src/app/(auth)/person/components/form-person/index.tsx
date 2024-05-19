"use client"

import { LabelAndValue } from "@/types/common"
import { useFormPerson } from "./core/hook/useFormPerson"
import { Label } from "@/components/ui/label"
import Select from "@/components/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FormPerson() {
  const { hookForm, onSubmit } = useFormPerson()

  const options: LabelAndValue[] = [
    { value: 'membro', label: 'Membro' },
    { value: 'pastor', label: 'Pastor' },
    { value: 'obreiro', label: 'Obreiro' }
  ]

  return (
    <>
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
          <Label className="mb-1">Nome</Label>
          <Input {...hookForm.register('name')} placeholder="Informe o nome" />
          {hookForm.formState.errors.name && <span className="text-xs text-red-600">{hookForm.formState.errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <Label>Data de entrada</Label>
          <Input {...hookForm.register('entry_date')} type="date" />
          {hookForm.formState.errors.entry_date && <span className="text-xs	text-red-600">{hookForm.formState.errors.entry_date.message}</span>}
        </div>
        <div className="w-full flex flex-col mb-6">
          <Label className="mb-1">Cargo</Label>
          <Select
            {...hookForm.register('role')}
            options={options}
            onChange={(event) => { hookForm.setValue('role', event.value) }}
          />
          {hookForm.formState.errors.role && <span className="text-xs text-red-600">{hookForm.formState.errors.role.message}</span>}
        </div>

        <Button>Salvar</Button>
      </form>
    </>
  )
}
