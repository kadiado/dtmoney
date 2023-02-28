import { useEffect } from "react";
import { api } from "../../services/api";
import { ContainerTransactionsTable } from "./style";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <ContainerTransactionsTable>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titleTable">Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">- R$ 1.400,00</td>
            <td>Casa</td>
            <td>17/02/2023</td>
          </tr>
        </tbody>
      </table>
    </ContainerTransactionsTable>
  );
}
