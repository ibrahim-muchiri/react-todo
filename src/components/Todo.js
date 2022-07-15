import React from "react";
import App from "../App";

const Todo = ({ text, todo, todos, setTodos }) => {

    //events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
       
    };
    const completeHandler = () =>{
        setTodos(todos.map(item => {
             if((item.id === todo.id)){
                return{
                    ...item, completed: !item.completed
                }
             }
             return item;
        }))
    }

    return (
      
        <div className="todo-content">
           
            <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{text}</li>
            
           
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check">Complete Todo</i></button>            
          
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-btn">Delete Todo</i></button>
          
        </div>
        
    );
}

export default Todo;