import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    console.log(searchQuery);

    // imperatively redirect with history.push()
    history.push('/search/?' + searchQuery);
    // history.push(`/search/?${searchQuery}`);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;