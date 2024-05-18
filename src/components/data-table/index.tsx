import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface DataTableProps {
  header: string[]
  body: JSX.Element
  total?: number
  title?: string
}

export default function DataTable({ header, body, total, title }: DataTableProps) {
  return (
    <Card>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
      </CardHeader>
      <CardContent>
        <Table className="table-auto">
          <TableHeader>
            <TableRow>
              {header.map((head, index) => (
                <TableHead key={index}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {body}
          </TableBody>
          {total && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell>R$ {total}.00</TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </CardContent>
    </Card>
  )
}