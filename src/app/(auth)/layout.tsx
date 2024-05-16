import Aside from "@/components/aside"
import Header from "@/components/header"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="flex min-h-screen flex-col flex-1 bg-container">
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}
