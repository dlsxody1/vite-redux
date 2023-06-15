import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store";
import { decrease, increase, init } from "../store/conterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const addNumber = () => {
    dispatch(increase(1));
  };

  const minusNumber = () => {
    dispatch(decrease(1));
  };

  const initNumber = () => {
    dispatch(init(""));
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={addNumber}>+</button>
      <button onClick={minusNumber}>-</button>
      <button onClick={initNumber}>초기화</button>
    </div>
  );
};

export default Counter;
