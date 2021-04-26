import React from 'react';
import MaleSymbol from './logos/Male-Symbol.svg';
import FemaleSymbol from './logos/Female-Symbol.svg';
import { AddToFavorites } from './AddToFavorites.js';

const BabyCard = ({ baby }) => (
	baby.sex === 'f' ?
		<div className='girl baby-card' onClick={() => AddToFavorites(baby.id)}>
			<img src={FemaleSymbol} alt='girl logo' className='gender-logo' />
			<span className='baby-name-text'>{baby.name}</span>
		</div>
		: <div className='boy baby-card' onClick={() => AddToFavorites(baby.id)}>
			<img src={MaleSymbol} alt='boy symbol' className='gender-logo' />
			<span className='baby-name-text'>{baby.name}</span>
		</div >
)

export default BabyCard;