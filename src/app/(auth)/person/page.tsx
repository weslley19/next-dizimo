import DataTable from "@/components/data-table"
import Modal from "@/components/modal"
import PageTitle from "@/components/page-title"
import FormPerson from "./components/form-person"
import { TableCell, TableRow } from "@/components/ui/table"
import { dateBrMask } from "@/lib/utils"

export default function Person() {
  const data: Array<{ id: number, name: string, entry_date: string, role: string }> = [
    { id: 1, name: 'Weslley', entry_date: '2020-10-15', role: 'Membro' },
    { id: 2, name: 'Weslley', entry_date: '2019-12-05', role: 'Pastor' },
    { id: 3, name: 'Weslley', entry_date: '2018-05-10', role: 'Obreiro' },
    { id: 4, name: 'Weslley', entry_date: '2020-01-02', role: 'Membro' },
  ]

  const BodyDataTable = (): JSX.Element => (
    <>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{dateBrMask(item.entry_date)}</TableCell>
          <TableCell>{item.role}</TableCell>
        </TableRow>
      ))}
    </>
  )

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <PageTitle>Membros</PageTitle>
        <Modal title="Adicionar Membro" labelButton="Adicionar">
          <FormPerson />
        </Modal>
      </div>

      <DataTable
        header={["Nome", "Data de Entrada", "Cargo"]}
        body={<BodyDataTable />}
        title="Lista de Membros"
      />
    </>
  )
}
