import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gitLink: "https://github.com/scottdj92",
			twitterLink: "https://twitter.com/sdj2964"
		}
	}
	render() {
		return (
			<div className="footer">
				<h4>Lovingly Handcrafted using React.js.</h4>
				<a href={this.state.gitLink} className="githubLink">GitHub</a>
				<a href={this.state.twitterLink} className='twitterLink'>Twitter</a>
			</div>
		);
	}
}