export default function InputField({ text, setText, addTodo }) {
  return (
    <label>
      <input value={text} onChange={(e) => addTodo(e.target.value)} />
      <button onClick={setText}>Add Todo</button>
    </label>
  );
}
