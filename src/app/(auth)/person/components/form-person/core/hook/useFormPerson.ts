import { SubmitHandler, useForm } from "react-hook-form"
import { FormPerson, initValues, schemaPerson } from "../validation/schema"
import { zodResolver } from "@hookform/resolvers/zod"

export function useFormPerson() {
  const hookForm = useForm<FormPerson>({
    defaultValues: initValues,
    resolver: zodResolver(schemaPerson)
  })

  const onSubmit: SubmitHandler<FormPerson> = async (data) => {
    console.log(JSON.stringify(data))
  }

  return {
    hookForm,
    onSubmit
  }
}
