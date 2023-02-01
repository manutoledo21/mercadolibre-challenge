import React from 'react';
import { useAppContext } from '../context/MyAppContext';
import Search from '../Search/Search';
import { ItemSearch } from '../ItemsSearch/ItemSearch';

export const PageIndex = () => {
  const {
    search: { results },
  } = useAppContext();
  return (
    <>
      <Search />
      {results.map((result) => (
        <ItemSearch key={result.id} results={result} />
      ))}
    </>
  );
};
