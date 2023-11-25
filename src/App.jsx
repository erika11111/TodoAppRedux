import { useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import styles from "./app.module.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText("");
  };
  const removeTodo = (itemId) => {
    setTodos(todos.filter((item) => item.id !== itemId));
  };

  const handleComplete = (itemId) => {
    setTodos(
      todos.map((item) => {
        if (item.id !== itemId) return item;

        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };
  return (
    <div className={styles.App}>
      <InputField text={text} setText={setText} addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
