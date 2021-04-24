import BabyNamesContainer from './BabyNamesContainer.js';
import BabyNamesList from './data/babyNamesData.json';

import './App.css';

function App() {
	return (
		<div className="App mx-auto">
			<BabyNamesContainer babyNames={BabyNamesList} />
		</div>
	);
}

export default App;
