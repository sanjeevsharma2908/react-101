import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(`https://www.omdbapi.com/?s=${debouncedSearchTerm}&apikey=YOUR_API_KEY`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            setSearchResults(data.Search);
          } else {
            setSearchResults([]);
          }
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies or shows"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {searchResults.map((result) => (
          <div key={result.imdbID}>{result.Title}</div>
        ))}
      </div>
    </div>
  );
}

export default Search;
