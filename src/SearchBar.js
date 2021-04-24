import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => (
  <input className="form-control m-2 mx-auto search-bar" type="search" placeholder="Search names" key='826318' aria-label="Search"
  // value={keyword} onChange={(e) => setKeyword(e.target.value)} 
  />
)

export default SearchBar;