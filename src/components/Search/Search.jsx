import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchResults } from '../API/Service';
import { useAppContext } from '../context/MyAppContext';
import './search-styles.css';

const Search = () => {
  const [parametro, setParametro] = useSearchParams();
  const limit = 4;

  useEffect(() => {
    (async () => {
      if (parametro.get('search') != null) {
        const data = await fetchResults({ q: parametro.get('search'), limit });
        setResults(data);
      }
    })();
  }, [parametro]);

  const [searchTerm, setSearchTerm] = useState('');
  const {
    search: { results, setResults },
  } = useAppContext();

  const handleSearch = async (e) => {
    e.preventDefault();
    setParametro({ search: searchTerm });
    const data = await fetchResults({ q: searchTerm, limit });
    setResults(data);
  };

  return (
    <header>
      <nav>
        <form className="search__container" onSubmit={handleSearch}>
          <a href="">
            <img src="./assets/Logo_ML.png" className="icon__ml" alt="logo-ML" />
          </a>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input__search"
            placeholder="Nunca dejes de buscar"
            required
          />
          <button type="submit" className="btn__search">
            <img src="./assets/ic_Search.png" alt="icon-search" />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Search;
