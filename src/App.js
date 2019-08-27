import React, {useState} from 'react';

import data from './data/data'
import './App.css';

import MainSection from './components/main/Main'


// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = data;
// 		//const state = setState(data);
// 		//const sections = state.sections;
// 	}
//
//
// 	render() {
// 		const sections_obj = this.state.sections;
// 		const section = sections_obj.map((data, index) => {
// 			return <MainSection
// 				title={data.title}
// 				description={data.description}
// 				index={index}
// 			/>
// 		});
// 		return (
// 			<>
// 				<main>{this.state.main}</main>
// 				{section}
// 			</>
// 		)
// 	}
//
// }

function App() {
	const [state] = useState(data);
	const sections_obj = state.sections;
	const section = sections_obj.map((data, index) => {
		return <MainSection
			title={data.title}
			description={data.description}
			index={index}
		/>
	});
	return (
		<>
			<main>{state.main}</main>
			{section}
		</>
	)
}


export default App;
