import TodoItem from "./TodoItem";
export default function TodoList({ todos, removeTodo, handleComplete }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          removeTodo={removeTodo}
          handleComplete={handleComplete}
          {...item}
        />
      ))}
    </ul>
  );
}
