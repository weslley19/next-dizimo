import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <>
      <header className="h-24 bg-header border-b px-3 py-3 border-custom">
        Header
        <ThemeToggle />
      </header>
    </>
  )
}
