"use client"

import { usePathname } from "next/navigation"
import clsx from "clsx"

interface NavMenuItemProps {
  path: string
  children: React.ReactNode
}

export default function NavMenuItem({ path, children }: NavMenuItemProps) {
  const pathname = usePathname()

  return (
    <>
      <li
        className={clsx("flex items-center gap-3 h-8 rounded-md	px-3 my-1 hover:bg-nav-item transition ease-in-out cursor-pointer",
          {
            "bg-nav-item": pathname === path
          }
        )}
      >
        {children}
      </li>
    </>
  )
}
