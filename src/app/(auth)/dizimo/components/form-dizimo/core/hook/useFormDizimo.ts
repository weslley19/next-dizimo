import { SubmitHandler, useForm } from "react-hook-form"
import { FormDizimo, initValues, schemaDizimo } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function useFormDizimo() {
  const hookForm = useForm<FormDizimo>({
    defaultValues: initValues,
    resolver: zodResolver(schemaDizimo)
  })

  const onSubmit: SubmitHandler<FormDizimo> = async (data) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return {
    hookForm,
    onSubmit
  }
}
