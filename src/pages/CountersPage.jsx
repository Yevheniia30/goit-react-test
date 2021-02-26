import { useState } from "react";
import Counter from "../components/Counter/Counter";

const CountersPage = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    setCounters([
      ...counters,
      {
        id: Date.now(),
      },
    ]);
  };

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div className="counters">
      <h2 className="counter__title">Counters</h2>

      <button
        type="button"
        className="addCouunter__btn"
        onClick={handleAddCounter}
      >
        Add a counter
      </button>

      {counters.map(({ id }) => (
        <Counter key={id} onDelete={() => handleDelete(id)} />
      ))}

      {/* <Counter value={10} />
      <Counter value={20} />
      <Counter /> */}
    </div>
  );
};

export default CountersPage;
