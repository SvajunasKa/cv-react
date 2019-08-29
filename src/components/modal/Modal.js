import React, {useState} from 'react'




const modal = (props) => {

	function submit(e){
		e.preventDefault();
		const value = e.target[0].value;
		props.callbackFn(value);
	};



	return (
		<div>
			<form onSubmit={submit}>
				<input type="text"/>
				<button type="submit">submit</button>
			</form>
		</div>
	)
};

export default modal;