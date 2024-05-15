import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SigninForm, initValues, loginSignin } from "../validation/schema"

export function useFormSignin() {
  const hookForm = useForm<SigninForm>({
    defaultValues: initValues,
    resolver: zodResolver(loginSignin)
  })

  const onSubmit: SubmitHandler<SigninForm> = async (data) => {
    console.log('login', data)
  }

  return {
    hookForm,
    onSubmit
  }
}
