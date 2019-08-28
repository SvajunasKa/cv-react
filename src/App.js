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

	return (
		<>
			<main>{data.main}</main>
			<Aaa aaa={'test'} ddd='aaa' ccc={55}/>
		</>
	)
}

function Aaa({aaa, bbb = '123', ...props}) {
	console.log(props);
	return data.sections.map((data, index) =>
		<MainSection
			key={index}
			title={data.title}
			description={data.description}
			{...props}
		/>
	);
};