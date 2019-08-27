import React, {useState} from 'react';

import data from './data/data'
import './App.css';

import MainSection from './components/main/Main'


function App() {
	const [state] = useState(data);
	const sections = state.sections;


	return (
		sections.map((data, index) => {
			console.log(data, "index", index)
			return <div className="App">
				<MainSection
					title={data.title}
					description={data.description}
					key={index}
				/>
			</div>
		})

	);
}

export default App;
