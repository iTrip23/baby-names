import React, { useState } from 'react';
import Search from './Search.js';
import NamesContainer from './NamesContainer.js'
import FavNames from './FavNames.js';
import FilterButton from './FilterButton.js';
import FilterNames from './FilterNames.js';
import './App.css';

function App({ names }) {
	const [searchValue, setSearchValue] = useState('');
	const [favNames, setFavNames] = useState([]);
	const [babyNames, setBabyNames] = useState(names);

	console.log(FilterNames.boy(names));
	return (
		<div className="App mx-auto">
			<h1 className='m-3'>Baby name picker</h1>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<FilterButton names={babyNames} onClickFunction={() => setBabyNames(FilterNames.boy(names))} filterMode={'Boys'} />
			<FilterButton names={babyNames} onClickFunction={() => setBabyNames(FilterNames.girl(names))} filterMode={'Girls'} />
			<FilterButton names={babyNames} onClickFunction={() => setBabyNames(FilterNames.all(names))} filterMode={'All'} />
			<FavNames names={babyNames} favNames={favNames} setFavNames={setFavNames} />
			<NamesContainer names={babyNames} searchValue={searchValue} favNames={favNames} setFavNames={setFavNames} />
		</div>
	);
}

export default App;