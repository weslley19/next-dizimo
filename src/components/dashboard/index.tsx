import { ArrowDown, DollarSign, Users, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import GraphicMonths from "./components/graphic-months";

export default function Dashboard() {
  const data: Array<{ label: string, icon: JSX.Element, value: string }> = [
    { label: 'Membros', icon: <Users size={16} />, value: '120' },
    { label: 'Entradas', icon: <Wallet size={16} />, value: 'R$ 2780.52' },
    { label: 'Saídas', icon: <ArrowDown size={16} />, value: 'R$ 1945.00' },
    { label: 'Total', icon: <DollarSign size={16} />, value: 'R$ 835.52' },
  ]

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card key={index} className="rounded-xl">
            <CardHeader className="space-y-0 pb-3 flex flex-row justify-between items-center">
              <CardTitle className="text-sm">{item.label}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent className="pb-4 text-2xl font-bold">{item.value}</CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4" />

      <GraphicMonths />
    </>
  )
}
