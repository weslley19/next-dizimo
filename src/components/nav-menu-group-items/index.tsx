interface NavMenuGroupItemsProps {
  title?: string
  children: React.ReactNode
}

export default function NavMenuGroupItems({ title, children }: NavMenuGroupItemsProps) {
  return (
    <>
      <div className="flex flex-col mb-4">
        {title && <span className="px-3 mb-2 text-slate-400">{title}</span>}
        {children}
      </div>
    </>
  )
}
