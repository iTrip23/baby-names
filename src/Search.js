import React, { useRef, useEffect } from 'react';

const Search = ({ searchValue, setSearchValue }) => {
	const handleEvent = (event) => setSearchValue(event.target.value);
	const inputRef = useRef();
	useEffect(() => inputRef.current.focus(), []);

	return (
		<input className="form-control m-2 mx-auto col-8 col-md-3" type="search" placeholder="Search names" key='826318' aria-label="Search"
			value={searchValue} onChange={handleEvent} ref={inputRef} />
	)
}

export default Search;