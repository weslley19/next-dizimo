import { ThemeToggle } from "@/components/theme-toggle"
import Profile from "@/components/profile"
import { auth } from "@/auth"

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
