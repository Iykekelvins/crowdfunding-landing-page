import React, { useContext, useReducer } from "react";
import reducer from "../context/reducer";
import { pledges } from "../data";
import { modal_pledges } from "../data";

const AppContext = React.createContext();
const initialState = {
  modal: false,
  isComplete: false,
  menu: false,
  pledge: pledges,
  modalPledge: modal_pledges,
  target: 18894,
  people: 5007,
  initialValue: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const openComplete = () => {
    dispatch({ type: "MODAL_COMPLETE" });
  };
  const closeComplete = () => {
    dispatch({ type: "CLOSE_COMPLETE" });
  };
  const openMenu = () => {
    dispatch({ type: "OPEN_MENU" });
  };
  const closeMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };
  const increaseTarget = (initialValue) => {
    dispatch({ type: "INCREASE", payload: initialValue });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        openComplete,
        closeComplete,
        openMenu,
        closeMenu,
        increaseTarget,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(AppContext);
};
