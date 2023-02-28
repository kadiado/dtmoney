import logoImg from "../../assets/logo.svg";
import { ContainerHeader, ContentHeader } from "./style";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logoImg} alt="logo Dt Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </ContentHeader>
    </ContainerHeader>
  );
}
