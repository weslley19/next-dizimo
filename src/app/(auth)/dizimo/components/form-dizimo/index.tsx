"use client"

import Select from "@/components/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LabelAndValue } from "@/types/common"
import { useFormDizimo } from "./core/hook/useFormDizimo"
import { Button } from "@/components/ui/button"

export default function FormDizimo() {
  const { hookForm, onSubmit } = useFormDizimo()

  const options: LabelAndValue[] = [
    { value: 'weslley', label: 'Weslley' },
    { value: 'miller', label: 'Miller' },
    { value: 'bob', label: 'Bob' },
    { value: 'bioca', label: 'Bioca' },
  ]

  return (
    <>
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
          <Label className="mb-1">Selecione o membro</Label>
          <Select
            {...hookForm.register('person_id')}
            options={options}
            onChange={(event) => { hookForm.setValue('person_id', event.value) }}
          />
          {hookForm.formState.errors.person_id && <span className="text-xs text-red-600">{hookForm.formState.errors.person_id.message}</span>}
        </div>
        <div className="flex gap-4 mb-6">
          <div className="w-full">
            <Label>Data</Label>
            <Input {...hookForm.register('date')} type="date" />
            {hookForm.formState.errors.date && <span className="text-xs	text-red-600">{hookForm.formState.errors.date.message}</span>}
          </div>
          <div className="w-full">
            <Label>Valor (R$)</Label>
            <Input {...hookForm.register('value')} placeholder="Informe o valor" />
            {hookForm.formState.errors.value && <span className="text-xs	text-red-600">{hookForm.formState.errors.value.message}</span>}
          </div>
        </div>

        <Button>Salvar</Button>
      </form>
    </>
  )
}
