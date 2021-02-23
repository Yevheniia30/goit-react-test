const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Increment by
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement by
      </button>
    </div>
  );
};

export default Controls;
