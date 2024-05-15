import Aside from "@/components/aside"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <Aside />
            <main className="flex min-h-screen flex-col flex-1 bg-container">
              <Header />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
