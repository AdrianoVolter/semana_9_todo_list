//crie e exporte um contexto todoContext(use o createContext do React).
import React, { createContext } from 'react';

export const toDosContext = createContext( );


export function ToDoProvider({ children }) {
    return (
        <toDosContext.Provider value={ [ ] } >
           
            {children}
        </toDosContext.Provider>
    );
}