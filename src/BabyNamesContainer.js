import React from 'react';
import BabyCard from './BabyCard.js';

const BabyNamesContainer = ({ babyNames }) => (
	<section className='baby-container m-auto'>
		{babyNames.map((baby, index) => <BabyCard baby={baby} key={index} />)}
	</section>
)

export default BabyNamesContainer;