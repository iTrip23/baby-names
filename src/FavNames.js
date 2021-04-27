import React from 'react';
import NameCard from './NameCard.js';

const FavNames = ({ names, favNames, setFavNames }) => {
	const favNamesList = names.filter(elem => favNames.includes(elem.id));
	const remNameFromFav = (id) => setFavNames(favNames.filter(elem => elem !== id));

	return (
		<section className='name-container'>
			<h3>Favorite Names: {favNamesList.length === 0 ? <span className='text-muted'>Click on Names to add them</span> : null}</h3>
			{favNamesList.map((name, index) => <NameCard name={name} key={index} onClickFunction={remNameFromFav} />)}
			<hr />
		</section>
	)
};

export default FavNames;