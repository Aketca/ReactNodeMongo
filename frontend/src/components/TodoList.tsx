import React, {useState} from "react";

interface Props {
  todos: any
}
interface Todo {
  text: string
}

const TodoList = ({todos}:Props) => {
  const [activeIndex, setActiveIndex]: Array<any> = useState(0);

  const handleActive = (index: any) => {
    setActiveIndex(index);
  }
  return (todos ? (
    <ul className="list-group">
      {todos.map((todo: Todo, i: number) => (
        <li
          className={
            "list-group-item cursor-pointer " +
            (i === activeIndex ? "active" : "")
          }
          key={i}
          onClick={() => handleActive}
        >
          {todo.text} 111
        </li>
      ))}
    </ul>
  ) : (
    <div className="alert alert-primary" role="alert">
      No Todos to display
    </div>
  ))
}

export default TodoList
