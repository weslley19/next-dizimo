import NavMenu from "../nav-menu";

export default function Aside() {
  return (
    <>
      <aside className="w-72 bg-aside border border-custom">
        <div className="h-16 px-3 py-3 flex justify-between items-center">aside</div>
        <div className="px-3 py-3">
          <NavMenu />
        </div>
      </aside>
    </>
  )
}
