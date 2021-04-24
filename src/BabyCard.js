import React from 'react';
import MaleSymbol from './logos/Male-Symbol.svg';
import FemaleSymbol from './logos/Female-Symbol.svg';

const BabyCard = props => (
	<div key={props.baby.id} className={props.baby.sex === 'f' ? 'girl baby-card' : 'boy baby-card'}>
		{props.baby.sex === "m" ? <img src={MaleSymbol} alt='boy symbol' className='gender-logo' />
			: <img src={FemaleSymbol} alt='girl symbol' className='gender-logo' />}
		<span className='baby-name-text'>{props.baby.name}</span>
	</div>
)

export default BabyCard;