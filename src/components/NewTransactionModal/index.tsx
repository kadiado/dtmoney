import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { TransactionsContext } from "../../TransactionsContext";
import { api } from "../../services/api";

import CloseImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { ContainerModal, TransactionTypeContainer, RadioBox } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function HandleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" onClick={onRequestClose} className="react-modal-close-img">
        <img src={CloseImg} alt="close button modal" />
      </button>
      <ContainerModal>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />

        <input type="number" placeholder="Valor" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox type="button" onClick={() => setType("deposit")} isActive={type === "deposit"} activeColor="green">
            <img src={incomeImg} alt="imagem enviar deposito" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox type="button" onClick={() => setType("withdraw")} isActive={type === "withdraw"} activeColor="red">
            <img src={outcomeImg} alt="imagem enviar despesa" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" type={category} onChange={(event) => setCategory(event.target.value)} />

        <button type="submit" onClick={HandleCreateNewTransaction}>
          Cadastrar
        </button>
      </ContainerModal>
    </Modal>
  );
}
