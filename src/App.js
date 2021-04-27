import React, { useState } from 'react';
import Search from './Search.js';
import NamesContainer from './NamesContainer.js'
import FavNames from './FavNames.js';
import './App.css';

function App({ names }) {
	const [searchValue, setSearchValue] = useState('');
	const [favNames, setFavNames] = useState([]);

	return (
		<div className="App mx-auto">
			<h1>Baby name picker</h1>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<FavNames names={names} favNames={favNames} setFavNames={setFavNames} />
			<NamesContainer names={names} searchValue={searchValue} favNames={favNames} setFavNames={setFavNames} />
		</div>
	);
}

export default App;