const FilterNames = {
	boy: function (arr) {
		return arr.filter(name => name.sex === 'm')
	},
	girl: function (arr) {
		return arr.filter(name => name.sex === 'f')
	},
	all: function (arr) {
		return arr;
	}
}

export default FilterNames;