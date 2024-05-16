// "use client"

import Dashboard from "@/components/dashboard";
// import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  // useEffect(() => {
  //   if (!localStorage.getItem('first-login')) {
  //     toast.success('Welcome to your dashboard')
  //     // localStorage.removeItem('first-login')
  //   }
  // }, [])

  return (
    <>
      <Dashboard />
    </>
  );
}
