import s from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={s.list}>
      {todos.map(({ id, text }) => (
        <li className={s.item} key={id}>
          <p className={s.text}>{text}</p>
          <button
            type="button"
            className={s.button}
            onClick={() => onDeleteTodo(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
