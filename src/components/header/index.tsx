import { ThemeToggle } from "@/components/theme-toggle"
import Profile from "@/components/profile"
import { auth } from "@/auth"
import { headers } from 'next/headers'

export default async function Header() {
  const user = await auth()
  const url = new URL(headers().get('referer') as string) ?? '/'

  return (
    <>
      <header className="h-26 bg-header">
        <div className="border-b px-3 py-3 flex justify-between items-center">
          <span className="font-semibold">Bem vindo, {user?.user?.name ?? ''}</span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Profile />
          </div>
        </div>
        <div className="border-b px-3 py-2">
          /Home/Page
        </div>
      </header>
    </>
  )
}
