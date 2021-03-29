import { useState } from "react";
import Title from "./Title";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
    const [todos, setTodos] = useState([
        { content: '掃除をする', id: nanoid() },
        { content: '洗濯をする', id: nanoid() },
        { content: '料理をする', id: nanoid() },
    ]);
    const addTodo = (text) => {
        setTodos([...todos, { content:text, id: nanoid() }])
    }
  return (
    <>
      <Title />
      <Form />
      <List todos={todos} />
    </>
  );
};

export default App;
