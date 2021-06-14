import React from "react";
import close from "../images/icon-close-modal.svg";
import ModalContent from "../components/ModalContent";
import { useGeneralContext } from "../context/context";
const Modal = () => {
  const { modalPledge, modal, closeModal } = useGeneralContext();
  return (
    <section className={`${modal ? "modal-cover show-modal" : "modal-cover"}`}>
      <section className="modal-content">
        <img src={close} alt="closeicon" onClick={closeModal} />
        <h3>Back this project</h3>
        <p style={{ margin: "1rem 0" }}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        {modalPledge.map((item) => {
          return <ModalContent item={item} key={item.id} />;
        })}
      </section>
    </section>
  );
};

export default Modal;
