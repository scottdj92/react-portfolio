import React from 'react';

export default class Biography extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1>Bio</h1>
				<section>Hi, I'm Scott Jones. I hail from Tucson, Arizona.</section>
				<section className='header'>
					<h4>Stats:</h4>
					<ul>
						<li>Age: 23</li>
						<li>Height: 5'9"</li>
						<li>Skills: Front-end Web Development</li>
						<li>Spirit Animal: Buffalo</li>
						<li>Favorite Text Editor: Sublime Text 3</li>
						<li>Can I do a reverse 360 dunk?: No</li>
					</ul>
				</section>
			</div>
		);
	}
}