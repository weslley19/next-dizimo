import DataTable from "@/components/data-table"
import Modal from "@/components/modal"
import PageTitle from "@/components/page-title"
import { TableCell, TableRow } from "@/components/ui/table"
import FormDizimo from "./components/form-dizimo"
import { money } from "@/lib/utils"

export default function Dizimo() {
  const data: Array<{ id: number, name: string, value: number, date: string }> = [
    { id: 1, name: 'Weslley', value: 100.00, date: '01/01/2021' },
    { id: 2, name: 'Weslley', value: 100, date: '01/01/2021' },
    { id: 3, name: 'Weslley', value: 100, date: '01/01/2021' },
    { id: 4, name: 'Weslley', value: 100, date: '01/01/2021' },
    { id: 5, name: 'Weslley', value: 100, date: '01/01/2021' },
    { id: 6, name: 'Weslley', value: 100, date: '01/01/2021' },
  ]

  const BodyDataTable = (): JSX.Element => (
    <>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>{money(item.value ?? 0)}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <PageTitle>Dízimos</PageTitle>
        <Modal title="Adicionar dízimo" labelButton="Adicionar">
          <FormDizimo />
        </Modal>
      </div>

      <DataTable
        header={["Nome", "Data", "Valor"]}
        body={<BodyDataTable />}
        total={data.reduce((acc, item) => acc + item.value, 0)}
        title="Lista de Dizimistas"
      />
    </>
  )
}
