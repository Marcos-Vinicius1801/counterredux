import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "../src/reducers/reducers";
import { Provider } from "react-redux";

import App from "./App";
import { myLogger, mySecondLogger, myThirdLogger } from "./middlewares/middlewares";

const store = createStore(counterReducer, applyMiddleware(myLogger, mySecondLogger, myThirdLogger));
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
