import "./App.scss";
import { useState, useEffect } from "react";
import TodoList from "./components/body/TodoList";
import TodoHeader from "./components/header";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const addTodo = (todoItem) => {
    if (!todoItem.title) {
      return;
    }
    setTodos([...todos, todoItem]);
  };

  const deletTodo = (todoId) => {
    const cleanTodos = todos.filter((item) => item.id !== todoId);
    setTodos(cleanTodos);
  };

  const checkedTodo = (renewedTodo) => {
    const newCheckedTodo = todos.map((i) => {
      if (i.id === renewedTodo.id) {
        return renewedTodo;
      } else {
        return i;
      }
    });
    setTodos(newCheckedTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="register">
        <h1 className="title">TODO LIST</h1>
        <TodoHeader addTodo={addTodo} todos={todos} setTodos={setTodos} />
        <TodoList
          todos={todos}
          deletTodo={deletTodo}
          checkedTodo={checkedTodo}
        />
      </div>
    </div>
  );
}

export default App;
