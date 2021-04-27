import React from 'react';
import Symbols from './LogoImg';

const FilterButton = ({ names, onClickFunction, source }) =>
(<button type='button' onClick={() => onClickFunction(names)} className='gender-symbols'>
	<img src={source} className='gender-logo' alt={source === Symbols.male ? 'male symbol' : source === Symbols.female ? 'female symbol' : 'male and female symbol'} />
</button>)

export default FilterButton;