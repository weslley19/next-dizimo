import Image from 'next/image'
import NavMenu from "../nav-menu"

export default function Aside() {
  return (
    <>
      <aside className="w-[280px] bg-aside border-r">
        <div className="h-[64.8px] px-3 py-3 flex justify-center items-center border-b">
          <Image
            src={'/images/logo.png'}
            alt='Logo OBPC'
            width={500}
            height={500}
          />
        </div>
        <div className="px-3 py-3">
          <NavMenu />
        </div>
      </aside>
    </>
  )
}
