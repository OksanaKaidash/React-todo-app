import { useRef } from "react";
import "./style.scss";

const TodoHeader = ({ addTodo }) => {
  const inputTodo = useRef([]);

  const createNewTodo = (event) => {
    const todoItem = {
      id: new Date().getTime(),
      title: inputTodo.current.value,
      completed: false,
    };

    addTodo(todoItem);

    inputTodo.current.value = "";
    event.preventDefault();
  };

  return (
    <form action="" className="header">
      <input  className="input_Todo" type="text" ref={inputTodo} />
      <button  className="button-Todo" onClick={createNewTodo}>Add Todo</button>
    </form>
  );
};

export default TodoHeader;
