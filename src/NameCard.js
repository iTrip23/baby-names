import React from 'react';
import Symbols from './LogoImg.js';

const NameCard = ({ name, onClickFunction }) => (
	name.sex === 'f' ?
		<div className='girl name-card' onClick={() => onClickFunction(name.id)}>
			<img src={Symbols.female} alt='girl logo' className='gender-logo' />
			<span className='baby-name-text'>{name.name}</span>
		</div>
		: <div className='boy name-card' onClick={() => onClickFunction(name.id)}>
			<img src={Symbols.male} alt='boy symbol' className='gender-logo' />
			<span className='baby-name-text'>{name.name}</span>
		</div >
)

export default NameCard;