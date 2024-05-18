import DataTable from "@/components/data-table"
import PageTitle from "@/components/page-title"
import { TableCell, TableRow } from "@/components/ui/table"

export default function Dizimo() {
  const data: Array<{ id: number, name: string, value: string, date: string }> = [
    { id: 1, name: 'Weslley', value: '100.00', date: '01/01/2021' },
    { id: 2, name: 'Weslley', value: '100.00', date: '01/01/2021' },
    { id: 3, name: 'Weslley', value: '100.00', date: '01/01/2021' },
    { id: 4, name: 'Weslley', value: '100.00', date: '01/01/2021' },
    { id: 5, name: 'Weslley', value: '100.00', date: '01/01/2021' },
    { id: 6, name: 'Weslley', value: '100.00', date: '01/01/2021' },
  ]

  const BodyDataTable = (): JSX.Element => (
    <>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>R$ {item.value}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <PageTitle>Dízimos</PageTitle>

      <DataTable
        header={["Nome", "Data", "Valor"]}
        body={<BodyDataTable />}
        total={data.reduce((acc, item) => acc + parseFloat(item.value), 0)}
        title="Lista de Dizimistas"
      />
    </>
  )
}
