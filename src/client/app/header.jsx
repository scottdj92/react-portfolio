import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className='header'>
				<h1>Scott Jones</h1>
				<span>A front-end web developer</span>
				<h6>I also like kittens.</h6>
			</div>
		);
	}
}

export default Header;