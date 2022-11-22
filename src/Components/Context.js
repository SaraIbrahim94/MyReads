import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [AllBooksData, setBooks] = useState([]);
  
    return (
        <Context.Provider value={{ AllBooksData, setBooks }}>
            {children}
        </Context.Provider>
    );
};