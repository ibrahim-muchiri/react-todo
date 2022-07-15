import React from 'react';
import TodoList from './TodoList';

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {

const inputTextHandler = (e) => {
   
    setInputText(e.target.value);
};

const submitTodoHandler = (e) =>{
  e.preventDefault();
  setTodos([
    ...todos, {
      text: inputText,
       completed: false,
        id: Math.random() * 1000},        
  ]);
  setInputText('');
}
const statusHandler = (e) => {
  setStatus(e.target.value)
}


  return (
   <div>
      <form className='form-content'>
        <input value={inputText} type="text" onChange={inputTextHandler}/>
        <button onClick={submitTodoHandler} className='todos-button' type='submit'>
            <i className='fas fa-plus-square'>Add Todo</i>
        </button>

      
        <select onChange={statusHandler} className='todos'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
       
        
      </form>
      </div>
    
  )
}

export default Form;

