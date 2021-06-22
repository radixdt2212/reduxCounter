import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, RESET, MODAL_OPEN } from "./actions";
function Counter({ name, count, increase, decrease, reset }) {
  //   const name = props.state.name;
  //   const amount = props.state.count;
  //   console.log(name, amount);
  //   const [count, setCount] = React.useState(0);

  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <h2>{name}</h2>
        <p className="counter">{count}</p>

        <div className="buttons">
          <button type="button" className="btn" onClick={decrease}>
            -
          </button>
          <button type="button" className="btn" onClick={reset}>
            reset
          </button>
          <button type="button" className="btn" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
function mapDipatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => {
      dispatch({
        type: MODAL_OPEN,
        payload: {
          name: "Narendra",
          text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam Sed Quis Totam Saepe Mollitia Tempore, Modi Eveniet Repellat! Odio, Non!",
        },
      });

      dispatch({ type: RESET });
    },
  };
}
function mapStateToProps({ countState: { count, name } }) {
  return {
    count: count,
    name: name,
  };
}
export default connect(mapStateToProps, mapDipatchToProps)(Counter);
