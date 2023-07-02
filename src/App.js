import React, { useState } from 'react';
import './App.css'
import ToDoList from './ToDoList';
function App() {
 
 const [inputList,setInputList]=useState("");
 const [item,setItem]=useState([]);

  const itemEvent=(e)=>{
      setInputList(e.target.value);
  }
  const listOfItems=()=>{
      setItem((oldData)=>{
          return [...oldData,inputList]
      });
     setInputList("") 
  }
  const deleteItem=(id)=>{
    setItem((oldData)=>{
      return oldData.filter((curval,index)=>{
          return index !== id
      })
    })

  }
  return (

    <>
        <div className='main_div'>
            <div className='center_div'>
              <br/>
              <h1>ToDo List</h1>
              <br/>
              <input 
                 type="text" 
                 placeholder='Add an Item' 
                 onChange={itemEvent}
                 value={inputList}
              />
              <br/>
              <br/>
              <br/>
              <button onClick={listOfItems}>+</button>

              <ol>
                 {item.map((itemval,index)=>{
                   return <ToDoList 
                   text={itemval}
                   id={index}
                   key={index}
                   onSelect={deleteItem}
                   />
                 })}
              </ol>
            </div>
         </div>
    </>
  );
}

export default App;
