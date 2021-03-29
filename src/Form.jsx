import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    // console.log(handleSubmit);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力..."
      />
      <button>送信</button>
    </form>
  );
};

export default Form;
