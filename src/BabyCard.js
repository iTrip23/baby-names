import React from 'react';
import MaleSymbol from './logos/Male-Symbol.svg';
import FemaleSymbol from './logos/Female-Symbol.svg';

const BabyCard = props => (
	props.baby.sex === 'f' ?
		<div className='girl baby-card'>
			<img src={FemaleSymbol} alt='girl logo' className='gender-logo' />
			<span className='baby-name-text'>{props.baby.name}</span>
		</div>
		: <div className='boy baby-card'>
			<img src={MaleSymbol} alt='boy symbol' className='gender-logo' />
			<span className='baby-name-text'>{props.baby.name}</span>
		</div>
)

export default BabyCard;