import { useSelector, useDispatch } from "react-redux";
 import { decrement, increment } from "../src/actions/actions";

export default function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch(count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
 
    </div>
  );
}


 