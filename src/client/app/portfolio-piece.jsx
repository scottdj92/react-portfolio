import React from 'react';
import cx from 'classnames';

export default class PortfolioPiece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLightbool: "false", 
			num: 0,
			flipped: false
		};
		this.showLightbox = this.showLightbox.bind(this);
	}

	showLightbox() {
		console.log('clicked');
		this.setState({flipped: true});

		/*let newNumCount = this.state.num + 1;
		this.setState({num: newNumCount});*/
	}

	render() {
		let flipClass = cx({
				'flipping': true,
				'flipped': this.state.flipped
			});
		return (
			<div className='portfolioPiece' onClick={this.showLightbox}>
				<h4>portfolio pieces here lololol</h4>
				<span>{this.state.showLightbool}</span>
				<div className={flipClass}>
					<figure className='front'>1</figure>
					<figure className='back'>2</figure>
				</div>
			</div>
		);
	}
}