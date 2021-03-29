import { useState } from "react";

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false)
  return (
    <li>
      <input
      type="checkbox"
      checked={isDone}
      onChange={()=> setIsDone(!isDone)}
      />
      <span style={{ textDecoration: isDone? "line-through" : 'none' }}>{content}</span>
      <button>削除</button>
    </li>
  );
};

export default Item;
