import { ContainerDashboard } from "./style";
import { Summary } from "../Summary/Index";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <ContainerDashboard>
      <Summary />
      <TransactionsTable />
    </ContainerDashboard>
  );
}
