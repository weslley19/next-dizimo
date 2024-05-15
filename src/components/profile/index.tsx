import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Profile() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="w-[2rem] h-[2rem] rounded-full m-auto"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
