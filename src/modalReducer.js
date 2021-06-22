import { MODAL_OPEN, MODAL_CLOSE } from "./actions";
const defaultState = {
  isOpen: false,
  name: "",
  text: "",
};

export default function reducer(state = defaultState, action) {
  if (action.type === MODAL_OPEN) {
    return {
      ...state,
      isOpen: true,
      name: action.payload.name,
      text: action.payload.text,
    };
  } else if (action.type === MODAL_CLOSE) {
    return {
      ...state,
      isOpen: false,
      name: "",
      text: "",
    };
  }
  return state;
}
