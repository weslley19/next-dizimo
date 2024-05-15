"use server"

import { server } from "@/service/api"
import { signIn } from "../../../../../../auth"
import { User, UserLogin } from "@/types/user"
import { DefaultRequest } from "@/types/common"

export async function login(payload: UserLogin) {
  await signIn("credentials", payload)
}

export async function verifyLogin(payload: UserLogin) {
  try {
    const response = await server.post<DefaultRequest<User>>('signin', payload)
    if (response.status === 200) {
      return response.data.data
    }
    return null
  } catch (err) {
    return null
  }
}

