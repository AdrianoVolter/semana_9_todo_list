//import { useState } from "react";
import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
//import useToDos from "../contexts/useToDos";
import { ToDoProvider } from "../contexts/ToDoProvider";
import { toDosContext } from "../contexts/ToDoProvider";


export const Home = () => {
  
  
  return (
    
    <ToDoProvider>
      <div className="row">
        <Formulario onSubmit={addToDo} />
      </div>
      <div className="row">
        <TodoList name="A fazer" list={pendingToDos} onClick={markTodo} />
        <TodoList name="Finalizados" list={completedToDos} onClick={markTodo} />
      </div>
    </ToDoProvider>
  );
};
