import useTodos from "../contexts/useTodos";

export const TodoItem = ({ todo }) => {

  const { markTodo } = useTodos();

  return (
    <li 
      key={todo.id}
      className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
      <label className="form-check-label" htmlFor={`${todo.id}-done-checkbox`}>
        {todo.text}
      </label>
      <input
        onChange={() => markTodo(todo.id)}
        role="button"
        className="form-check-input me-1"
        type="checkbox"
        checked={todo.done}
        id={`${todo.id}-done-checkbox`}
      />
    </li>
  );
};
