import React, { useState } from "react";
import { useGeneralContext } from "../context/context";

const ModalContent = ({ item }) => {
  const {
    closeModal,
    openComplete,
    increaseTarget,
    decreaseNumber,
  } = useGeneralContext();

  const { title, pledge, info, number, available, id } = item;
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === 0 || value === "") {
      return null;
    } else {
      increaseTarget(Math.abs(value));
      decreaseNumber(number);
      setValue("");
    }
    closeModal();
    openComplete();
  };

  return (
    <>
      <article
        className={`${
          isFooterOpen
            ? "modal-info active"
            : number === 0
            ? "inactive modal-info"
            : "modal-info"
        }`}
        key={id}
      >
        {number === 0 ? (
          <>
            <input type="radio" name="" id="" className="radio" />
            <header style={{ cursor: "unset" }}>
              <div>
                <h4>{title}</h4>
                <p className="pledge">{pledge}</p>
              </div>
              {available ? (
                <div className="available">
                  <h3>{number}</h3>
                  <p>left</p>
                </div>
              ) : null}
            </header>
          </>
        ) : (
          <>
            <input type="radio" name="" id="" className="radio" />
            <header>
              <div>
                <h4 onClick={() => setIsFooterOpen(!isFooterOpen)}>{title}</h4>
                <p className="pledge">{pledge}</p>
              </div>
              {available ? (
                <div className="available">
                  <h3>{number}</h3>
                  <p>left</p>
                </div>
              ) : null}
            </header>
          </>
        )}
        <p className="modal-content-info">{info}</p>
        {isFooterOpen && (
          <footer>
            <p>Enter your pledge</p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <div
                className={`${
                  isActive ? "form-control active" : "form-control"
                }`}
                onClick={() => setIsActive(true)}
              >
                <span>$</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <button onClick={handleSubmit} className="primary-btn">
                Continue
              </button>
            </form>
          </footer>
        )}
      </article>
    </>
  );
};

export default ModalContent;
