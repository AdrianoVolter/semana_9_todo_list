//crie e exporte um contexto todoContext(use o createContext do React).
import React, { createContext } from 'react';
import { appRouter } from '../Router';

export const toDosContext = createContext( );


export function ToDoProvider({ children }) {
    return (
        <toDosContext.Provider value={ appRouter } >
           
            {children}
        </toDosContext.Provider>
    );
}