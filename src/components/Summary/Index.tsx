import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

import { ContainerSummary } from "./style";

export function Summary() {
  return (
    <ContainerSummary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entrasdas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saída" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
    </ContainerSummary>
  );
}
