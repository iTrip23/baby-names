import React from 'react';
import NameCard from './NameCard.js';

const FavNames = ({ names, favNames, setFavNames }) => {
	const favNamesList = names.filter(elem => favNames.includes(elem.id));
	const remNameFromFav = (id) => setFavNames(favNames.filter(elem => elem !== id));

	return (
		<section className='name-container'>
			<h3>{favNamesList.length === 0 ? <span className='text-muted'>Click on Names to Favorite them them</span> 
			: favNamesList.length === 1 ? <span>You Favorite name is: </span> : <span>You favorite names are :</span>}</h3>
			{favNamesList.map((name, index) => <NameCard name={name} key={index} onClickFunction={remNameFromFav} />)}
			<hr />
		</section>
	)
};

export default FavNames;