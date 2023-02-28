import Modal from "react-modal";
import CloseImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { ContainerModal, TransactionTypeContainer } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" onClick={onRequestClose} className="react-modal-close-img">
        <img src={CloseImg} alt="close button modal" />
      </button>
      <ContainerModal>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="imagem enviar deposito" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="imagem enviar despesa" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </ContainerModal>
    </Modal>
  );
}
