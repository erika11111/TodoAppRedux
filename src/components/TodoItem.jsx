import { useDispatch } from "react-redux";
import { removeTodo, handleComplete } from "../store/todoSlice";
import styles from "./../app.module.css";
export default function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(handleComplete({ id }))}
      />
      <span>{text}</span>
      <span
        className={styles.delete}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
}
