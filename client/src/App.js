import React, { useState } from 'react'
import "./App.css";
import { Task } from './Task';

const App = () => {
  // first todo is a VAR 2nd is a FUNCTION 
  const [todoList, setTodoList ] = useState([ ]);
  const [newTask, setNewTask ] = useState ('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
};
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ?  1 : todoList[todoList.length - 1].id + 1, 
      taskName: newTask,
      completed: false, 
    };
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);
    setTodoList([...todoList, task]);
  };
  
  const completeTask= (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task; 
        }
      })
    )
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
    // const newTodoList = todoList.filter((task) =>{
    //   if (task === taskName) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    // setTodoList(newTodoList);
  };

  return (
    <div className='App'>
      <div>
        <input onChange={ handleChange }/>
        <button onClick={ addTask }>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
                return (
                <Task 
                  taskName = {task.taskName}  
                  id = {task.id} 
                  completed = {task.completed}
                  deleteTask = {deleteTask}
                  completeTask = {completeTask}
                />
                )
        })}
      </div>
    </div>
  )
}

export default App