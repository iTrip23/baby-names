import React from 'react';
import BabyCard from './BabyCard.js';
import SearchBar from './SearchBar.js';

const BabyNamesContainer = props => {
	let sortedNames = props.babyNames.sort((a, b) => {
		if (a.name > b.name) { return 1 }
		if (a.name < b.name) { return -1 }
		return 0;
	}
	)
	return (
		<>
			<SearchBar />
			<section className='baby-container m-auto'>
				{sortedNames.map(baby => <BabyCard baby={baby} />)}
			</section>
		</>
	)
}

export default BabyNamesContainer;