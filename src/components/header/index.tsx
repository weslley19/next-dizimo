import { ThemeToggle } from "@/components/theme-toggle"
import Profile from "@/components/profile"
import { auth, signOut } from "@/auth"
import { Button } from "../ui/button"

export default async function Header() {
  const user = await auth()

  return (
    <>
      <header className="h-26 bg-header">
        <div className="border-b border-custom px-3 py-3
          flex justify-between items-center
        ">
          <span className="font-semibold">{user?.user?.name ?? ''}</span>
          <div className="flex items-center gap-2">
            <form action={async () => {
              "use server"
              await signOut()
            }}>
              <Button variant={"destructive"}>Sair</Button>
            </form>

            <ThemeToggle />
            <Profile />
          </div>
        </div>
        <div className="border-b border-custom px-3 py-2">
          /Home/Page
        </div>
      </header>
    </>
  )
}
