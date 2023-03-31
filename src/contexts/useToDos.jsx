//crie e exporte uma função chamada useToDos. Esse será o nosso custom hook que dará acesso ao todoContext em todos os componentes que necessitarem dele.
import React, { useContext } from 'react';
import { toDosContext } from './ToDoProvider';




function useToDos( ) {


    const context = useContext(toDosContext);


    return context;
};




export default useToDos;
  
  