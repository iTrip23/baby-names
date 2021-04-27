import React from 'react';
import NameCard from './NameCard.js';

const NamesContainer = ({ names, searchValue, favNames, setFavNames }) => {
	const filteredNames = names.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
		.sort((a, b) => a.name > b.name ? 1 : -1)
		.filter(elem => !favNames.includes(elem.id));

	const addToFavNames = (id) => setFavNames([...favNames, id]);

	return (
		<section className='name-container m-auto' >
			{filteredNames.map((name, index) => (<NameCard name={name} key={index} onClickFunction={addToFavNames} />))}
		</section>
	)
}

export default NamesContainer;