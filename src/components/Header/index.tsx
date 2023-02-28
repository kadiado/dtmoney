import logoImg from "../../assets/logo.svg";
import { ContainerHeader, ContentHeader } from "./style";

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logoImg} alt="logo Dt Money" />
        <button type="button">Nova Transação</button>
      </ContentHeader>
    </ContainerHeader>
  );
}
