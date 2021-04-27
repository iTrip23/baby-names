import React from 'react';
import MaleSymbol from './logos/Male-Symbol.svg';
import FemaleSymbol from './logos/Female-Symbol.svg';

const NameCard = ({ name, onClickFunction }) => (
	name.sex === 'f' ?
		<div className='girl name-card' onClick={() => onClickFunction(name.id)}>
			<img src={FemaleSymbol} alt='girl logo' className='gender-logo' />
			<span className='baby-name-text'>{name.name}</span>
		</div>
		: <div className='boy name-card' onClick={() => onClickFunction(name.id)}>
			<img src={MaleSymbol} alt='boy symbol' className='gender-logo' />
			<span className='baby-name-text'>{name.name}</span>
		</div >
)

export default NameCard;