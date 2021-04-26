import React, { useState } from 'react';
import BabyNamesList from './data/babyNamesData.json';
import BabyNamesContainer from './BabyNamesContainer.js';


const SearchBar = () => {
	const [search, setSearch] = useState('');

	const filterNames = () => BabyNamesList.filter(baby => baby.name.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => a.name > b.name ? 1 : -1);

	return (
		<>
			<input className="form-control m-2 mx-auto search-bar" type="search" placeholder="Search names" key='826318' aria-label="Search"
				value={search} onChange={(e) => setSearch(e.target.value)} />
			<BabyNamesContainer babyNames={filterNames()} />
		</>
	)
}

export default SearchBar;