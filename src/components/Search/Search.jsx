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

  const handleSearch = async () => {
    setParametro({ search: searchTerm });
    const data = await fetchResults({ q: searchTerm, limit });
    setResults(data);
  };

  return (
    <header>
      <nav>
        <div className="search__container">
          <img src="../../../public/assets/Logo_ML.png" className="icon__ml" alt="logo-ML" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input__search"
            placeholder="Nunca dejes de buscar"
          />
          <button type="submit" onClick={handleSearch} className="btn__search">
            <img src="../../../public/assets/ic_Search.png" alt="icon-search" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Search;
