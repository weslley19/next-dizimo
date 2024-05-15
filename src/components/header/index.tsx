import { ThemeToggle } from "@/components/theme-toggle"
import Profile from "@/components/profile"

export default function Header() {
  const user = 'Weslley'

  return (
    <>
      <header className="h-26 bg-header">
        <div className="border-b border-custom px-3 py-3
          flex justify-between items-center
        ">
          <span className="font-semibold">{user}</span>
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
