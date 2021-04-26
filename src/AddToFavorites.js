const favoriteNamesArray = [];

const AddToFavorites = num => {
	let index = favoriteNamesArray.indexOf(num);
	index > -1 ? favoriteNamesArray.splice(index, 1)
		: favoriteNamesArray.push(num);
	console.log(favoriteNamesArray)
};

export { favoriteNamesArray, AddToFavorites };