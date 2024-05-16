import Aside from "@/components/aside"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="flex min-h-screen flex-col flex-1 bg-container">
          <Header />
          <div className="px-3 py-3">{children}</div>
          <Toaster />
        </main>
      </div>
    </>
  )
}
