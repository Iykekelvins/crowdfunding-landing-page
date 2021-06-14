const reducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    return { ...state, modal: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, modal: false };
  }
  if (action.type === "OPEN_MENU") {
    return { ...state, menu: true };
  }
  if (action.type === "CLOSE_MENU") {
    return { ...state, menu: false };
  }
  if (action.type === "MODAL_COMPLETE") {
    return { ...state, isComplete: true };
  }
  if (action.type === "CLOSE_COMPLETE") {
    return { ...state, isComplete: false };
  }
  if (action.type === "INCREASE") {
    return {
      ...state,
      target: state.target + action.payload,
      people: state.people + 1,
    };
  }

  return state;
};

export default reducer;
