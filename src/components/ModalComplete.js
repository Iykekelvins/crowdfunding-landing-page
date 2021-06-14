import React from "react";
import { useGeneralContext } from "../context/context";
import check from "../images/icon-check.svg";

const ModalComplete = () => {
  const { isComplete, closeComplete } = useGeneralContext();
  return (
    <div className={`${isComplete ? "modal-cover show-modal" : "modal-cover"}`}>
      <div className="modal-complete">
        <img src={check} alt="icon check" />
        <h3> Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="primary-btn" onClick={closeComplete}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ModalComplete;
