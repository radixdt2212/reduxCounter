import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { countReducer } from "./countReducer";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";

// get components
import Modal from "./Modal";
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools()
);

// console.log(store.getState());

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter default="foo" />
        <Modal />
      </Provider>
    </>
  );
}

export default App;
