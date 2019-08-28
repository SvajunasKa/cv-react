import React from 'react'

const mainSection = (props) => {
	console.log('!',props)
	return (
		<section key={props.index}>
			{props.title}
		</section>
	)
};

export default mainSection;