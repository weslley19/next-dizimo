import NavMenu from "../nav-menu"

export default function Aside() {
  return (
    <>
      <aside className="w-[280px] bg-aside border border-custom">
        <div className="h-16 px-3 py-3 flex justify-center items-center border-b border-custom">LOGO</div>
        <div className="px-3 py-3">
          <NavMenu />
        </div>
      </aside>
    </>
  )
}
