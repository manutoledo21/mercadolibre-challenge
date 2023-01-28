import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext({});

export const TagAppContext = ({ children }) => {
  const [results, setResults] = useState([]);
  const searchById = (id) => results.find((item) => id == item.id);
  return <AppContext.Provider value={{ search: { results, setResults, searchById } }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
