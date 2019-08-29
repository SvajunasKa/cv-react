import React, {useState} from 'react';

import data from './data/data'
import './App.css';

import Section from './components/main/Main'
import Modal from './components/modal/Modal'



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

// function createSection(state) {
// 	console.log(state)
// 	const sections_obj = state.sections;
// 	const section = sections_obj.map((data, index) => {
// 		return <MainSection
// 			title={data.title}
// 			description={data.description}
// 			index={index}
// 		/>
// 	});
// 	return section
// }




export default function App() {

	const [name, setName] = useState();

	function getInputValue(val) {
		setName(val)
		//return name;
	}

	return (
		<>
			{!name && <Modal callbackFn={getInputValue}/>}
			<main>{name}</main>
			<CreateSections/>
		</>
	)
}



function CreateSections() {
	return data.sections.map((data, index) =>
		<Section
			key={index}
			title={data.title}
			description={data.description}
		/>
	);
}