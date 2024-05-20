import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Income from "./components/income"
import WithDraw from "./components/withdraw"

export default function Releases() {
  return (
    <>
      <Tabs defaultValue="income">
        <TabsList className="grid w-full grid-cols-2 w-[500] m-auto mb-10 bg-background">
          <TabsTrigger value="income" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:text-primary">Entradas</TabsTrigger>
          <TabsTrigger value="withdraw" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:text-primary">Saídas</TabsTrigger>
        </TabsList>
        <TabsContent value="income">
          <Income />
        </TabsContent>
        <TabsContent value="withdraw">
          <WithDraw />
        </TabsContent>
      </Tabs>
    </>
  )
}
