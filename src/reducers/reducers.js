import { createStore } from "redux";

export const counterReducer = (state = 0, action) => {
  console.log('reducer reached and state saved')
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export const store = createStore(counterReducer);
