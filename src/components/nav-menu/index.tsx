"use client"

import { DollarSign, HandCoins, Home, Inbox, Users } from "lucide-react";
import NavMenuItem from "../nav-menu-item";
import NavMenuGroupItems from "../nav-menu-group-items";

export default function NavMenu() {
  return (
    <>
      <nav className="mt-6">
        <ul className="text-xs">
          <NavMenuGroupItems>
            <NavMenuItem path="/">
              <Home size={16} />
              Dashboard
            </NavMenuItem>
            <NavMenuItem path="/inbox">
              <Inbox size={16} />
              Inbox
            </NavMenuItem>
            <NavMenuItem path="/person">
              <Users size={16} />
              Pessoas
            </NavMenuItem>
          </NavMenuGroupItems>

          <NavMenuGroupItems title="Financeiro">
            <NavMenuItem path="/dizimo">
              <DollarSign size={16} />
              Dízimos
            </NavMenuItem>
            <NavMenuItem path="/releases">
              <HandCoins size={16} />
              Lançamentos
            </NavMenuItem>
          </NavMenuGroupItems>
        </ul>
      </nav>
    </>
  )
}
