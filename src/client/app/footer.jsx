import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<h4>Lovingly Handcrafted using React.js.</h4>
				<p className="githubLink">GitHub</p>
				<p className='emailLink'>Send me an email</p>
			</div>
		);
	}
}

export default Footer;