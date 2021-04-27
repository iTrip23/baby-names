import React from 'react';

const FilterButton = ({ names, onClickFunction, filterMode}) => (<button type='button' onClick={() => onClickFunction(names)}>{filterMode}</button>)

export default FilterButton;