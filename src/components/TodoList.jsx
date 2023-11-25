import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default TodoList;
