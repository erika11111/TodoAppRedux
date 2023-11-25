import styles from "./../app.module.css";
export default function TodoItem({
  id,
  completed,
  text,
  removeTodo,
  handleComplete,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleComplete(id)}
      />
      <span>{text}</span>
      <span className={styles.delete} onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
}
