import Item from "./Item";

const List = ({ todos }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return <Item key={todo.id} content={todo.content} />;
      })}
    </ul>
  );
};

export default List;
