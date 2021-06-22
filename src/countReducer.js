import { INCREASE, DECREASE, RESET } from "./actions";
const defaultState = {
  name: "Narendra",
  count: 0,
};

export function countReducer(state = defaultState, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
