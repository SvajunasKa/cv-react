import React from 'react'

const Section = (props) => {
	return (
		<section key={props.index}>
			{props.title}
		</section>
	)
};

export default Section;