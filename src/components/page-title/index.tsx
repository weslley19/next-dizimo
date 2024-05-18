interface PageTitleProps {
  children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <>
      <h1 className="text-[1.5rem] font-semibold mb-10">{children}</h1>
    </>
  )
}
