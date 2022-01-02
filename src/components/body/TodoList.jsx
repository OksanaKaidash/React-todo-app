import TodoItem from "./TodoItem";

const TodoList = ({todos, deletTodo, checkedTodo}) => {
    const todoItems = todos.map ( (todo, i) => {
        return (
          <TodoItem key={i} todo={todo} deletTodo={deletTodo} checkedTodo={checkedTodo}/>
        );
    });

    return todoItems;
};

export default TodoList