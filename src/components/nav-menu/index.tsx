import { Home, Inbox, Users } from "lucide-react";
import NavMenuItem from "../nav-menu-item";

export default function NavMenu() {
  return (
    <>
      <nav>
        <ul className="text-xs">
          <NavMenuItem path="/">
            <Home size={16} />
            Dashboard
          </NavMenuItem>
          <NavMenuItem path="/inbox">
            <Inbox size={16} />
            Inbox
          </NavMenuItem>
          <NavMenuItem path="/contacts">
            <Users size={16} />
            Contacts
          </NavMenuItem>
        </ul>
      </nav>
    </>
  )
}
