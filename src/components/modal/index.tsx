import { PropsWithChildren } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ModalPros {
  title: string
  labelButton: string
}

export default function Modal({ title, labelButton, children }: PropsWithChildren<ModalPros>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{labelButton}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
