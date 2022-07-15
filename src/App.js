//Fetching API
// // import React, {useState, useEffect} from 'react'

// // function App() {
// // const[resourceType, setResourceType] = useState("posts");
// // const [items, setItems] = useState([]);
// // // 
// // useEffect(() =>{
// //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
// //   .then(response => response.json())
// //   .then(json => setItems(json)) 
// //  }, [resourceType]);

// //   return (
// //     <>   
// //     <div>     
// //       <button onClick={()=> setResourceType("posts")}>posts</button>      
// //       <button onClick={()=> setResourceType("users")}>users</button>
// //       <button onClick={()=> setResourceType("comments")}>comments</button>
// //     </div>   
// //     <h3>{resourceType}</h3> 
// //     {items.map(item =>{
// //       return <pre>{JSON.stringify(item)}</pre>
// //     })} 
// //     </>
// //   )
// // }

// // export default App


// ///////////
// //////////////////////////////////

//fetching API
// //useState and useEffects
// // import React, {useEffect, useState} from 'react';
// // import './App.css';
// // import Axios from 'axios';
// // 
// // const App = () => {
// // 
//   //const [state, setState] = useState('post')
//   // const [name, setName] = useState('');  
//   // const [email, setEmail] = useState('');  
//   // const [password, setPassword] = useState('');
//   // const [passwordConfirm, setPasswordConfirm] = useState('');
//   // const [users, setUser] = useState([]);
//   //  
//   // 
// //  useEffect(() => {
//   // Axios.post("127.0.0.1:4000/api/v1/patients")
//   // .then((response) => {
//     // setUser(response.data);
//     // console.log(response.data);
//   // });
// //  }, []);
// // 
//   // return (   
//     // <>   
//      {/* <form> */}
//      {/* <h2 className='title'>User Details</h2> */}
//       {/* <div className='container'> */}
//       {/* <div className='group-container'> */}
// {/*  */}
//         {/* <div> */}
//           {/* <input */}
//         //  type='text'
//           // placeholder='Name' 
//           // value={name} 
//           // onChange={(e)=>setName(e.target.value)}
//           // />
//           {/* </div> */}
//           {/* <br></br> <br></br> */}
// {/*  */}
//           {/* <div> */}
//           {/* <input */}
//             //  type='email'
//               // placeholder='Email' 
//               // value={email} 
//               // onChange={(e)=>setEmail(e.target.value)}
//               // />
//           {/* </div> */}
//           {/* <br></br> <br></br> */}
// {/*  */}
//            {/* <div> */}
//             {/* <input  */}
//             // type="text"
//             // placeholder='Password'
//             // value={password}
//             // onChange={(e) =>setPassword(e.target.value)}
//             // />
//            {/* </div> */}
//            {/* <br></br> <br></br> */}
// {/*  */}
//            {/* <div> */}
//   {/* <input  */}
//   // type="text"
//   // placeholder='passwordConfirm'
//   // value={passwordConfirm}
//   // onChange={(e) =>setPasswordConfirm(e.target.value)}
//   // />
//   {/* </div> */}
// // </div>
//           //  <div>
//             {/* <input type='radio' value={gender} onChange={(e)=>setGender(e.target.value)} />MALE */}
//             {/* <input type='radio' value={gender} onChange={(e)=>setGender(e.target.value)} />FEMALE */}
//            {/* </div> */}
//           //  <button>submit</button>
//           //  <button>update</button>
//           //  <button>cancel</button>
// {/*  */}
//            {/* </div> */}
//            {/* </div> */}
//           {/* </form> */}
// {/*  */}
//          // {items.map(item =>{
// // return <pre>{JSON.stringify(item)}</pre>
// //})} 
// {/*    */}
// {/*    */}
//    {/* </>     */}
//   // )
// // }
// // 
// //  export default App;





//Custom hooks
// 
// import React from 'react';
// import useLocalStorage from "./useLocalStorage";
// import useUpdateLogger from './useUpdateLogger';

// const App = () => {
  // const [firstName, setFirstName]  = useLocalStorage('Name', ''); 
  // const [lastName, setLastName]  = useLocalStorage('Last Name', ''); 
  // const [job, setJob]  = useLocalStorage('Job', ''); 
  // const [employeeNo, setEmployeeNo]  = useLocalStorage('Employ No', '');
 
  // 
  // useUpdateLogger(firstName); 
  // useUpdateLogger(lastName);
  // useUpdateLogger(job);
  // useUpdateLogger( employeeNo);
// 
  // return (
  // <>
  // First Name:
  // <input type='text' value={firstName} onChange={(e) =>{ setFirstName(e.target.value)}} />
  // <br></br> <br></br>
  // Last Name:
  // <input type='text' value={lastName} onChange={(e) =>{ setLastName(e.target.value)}} />
  // <br></br> <br></br>
  // Job:
  // <input type='text' value={job} onChange={(e) =>{ setJob(e.target.value)}} />
  // <br></br> <br></br>
  // Employee No:
  // <input type='text' value={employeeNo} onChange={(e) =>{ setEmployeeNo(e.target.value)}} />
  // {/* // {items.map(item =>{ */}
    //  return <pre>{JSON.stringify(item)}</pre>
  //  })} 
 
  //  </>
// {/*   */}
// {/* ) */}
// {/*  */}
  // {/* } */}
// {/*  */}
// {/* export default App; */}


import { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
const [inputText, setInputText] = useState('')
const [todos, setTodos] =useState([]);
const [status, setStatus] = useState('All');
const [filteredTodos, setFilteredTodos] = useState([]);

const filterHandler = () => {
  switch(status) {
    case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
           setFilteredTodos(todos);
           break;
  }
}

useEffect(() => {
  filterHandler();
}, [todos, status]);

  return (
    <>
    <h2>Save All Your Work Here! </h2>
    <Form inputText={inputText}
     todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
     setStatus={setStatus} />

    <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </>     
    
  )
}

export default App























