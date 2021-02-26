import { useState } from "react";

// ------value  и ondelete взяли из пропсов в консоли----- =0 - замена defaultProps
const Counter = ({ value = 0, onDelete }) => {
  const [count, setValue] = useState(value);

  const handleDecrement = () => {
    setValue(count - 1);
  };

  const handleIncrement = () => {
    setValue(count + 1);
  };

  return (
    <div className="counter">
      <button className="counter__btn" onClick={handleDecrement}>
        -
      </button>
      <span className="counter__result">{count}</span>
      <button className="counter__btn" onClick={handleIncrement}>
        +
      </button>
      <button className="delete__btn" onClick={onDelete}>
        x
      </button>
    </div>
  );
};

// Counter.defaultProps = {
//   value: 0,
// };

export default Counter;
