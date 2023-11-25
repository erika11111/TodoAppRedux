import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import styles from "./app.module.css";

function App() {
  const [text, setText] = useState("");
  //dispatch tracks what actions need to be passed to reducer
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className={styles.App}>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
