import "./style.scss";
import delet from "./delet.png";

const TodoItem = ({todo, deletTodo, checkedTodo}) => {
    const clearTodo = () => deletTodo(todo.id);
    const markTodo = () => {
        todo.completed = !todo.completed;
        checkedTodo(todo);
    };

    return (
        <div className="element_Todo">
            <input type='checkbox' checked={todo.completed} onChange={markTodo} />
            <p className={`${todo.completed ? "checked" : ""}`}>{todo.title}</p>
            {/* <button className="delete_Todo"  onClick={clearTodo}></button> */}
            <img  className="delete_Todo"  onClick={clearTodo} src={delet} alt="x" />
        </div> 
    );
};

export default TodoItem