import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const user = 'Weslley'

  return (
    <>
      <header className="h-26 bg-header">
        <div className="border-b border-custom px-3 py-3
          flex justify-between items-center
        ">
          <span>{user}</span>
          <ThemeToggle />
        </div>
        <div className="border-b border-custom px-3 py-3">...</div>
      </header>
    </>
  )
}
