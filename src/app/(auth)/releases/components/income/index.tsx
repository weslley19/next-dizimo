import DataTable from "@/components/data-table"
import Tooltip from "@/components/tooltip"
import { TableCell, TableRow } from "@/components/ui/table"
import { dateBrMask, money } from "@/lib/utils"
import { CircleAlert } from "lucide-react"

export default function Income() {
  const data: Array<{ id: number, description: string, value: number, date: string }> = [
    { id: 1, description: 'Contribuição', value: 100.00, date: '2020-10-08' },
    { id: 2, description: 'Oferta', value: 100, date: '2020-10-08' },
    { id: 3, description: 'Alimentos', value: 100, date: '2020-10-08' }
  ]

  const BodyDataTable = (): JSX.Element => (
    <>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.description}</TableCell>
          <TableCell>{dateBrMask(item.date)}</TableCell>
          <TableCell>{money(item.value ?? 0)}</TableCell>
        </TableRow>
      ))}
    </>
  )
  return (
    <>
      <DataTable
        header={["Descrição", "Data", "Valor"]}
        body={<BodyDataTable />}
        total={data.reduce((acc, item) => acc + item.value, 0)}
        title={
          <>
            Lista de Receitas
            <Tooltip message="Dinheiro recebido, ex.: ofertas, contribuições...">
              <CircleAlert size={16} />
            </Tooltip>
          </>}
      />
    </>
  )
}
