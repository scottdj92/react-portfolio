import React from 'react';
import classNames from 'classnames';

class PortfolioPiece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLightbool: "false", 
			num: 0,
			flipped: ""
		};
		this.showLightbox = this.showLightbox.bind(this);
	}

	showLightbox() {
		console.log('clicked');
		if(this.state.showLightbool === "true") {
			this.setState({showLightbool: "false"});
			this.setState({flipped: "flipped"});
		} else {
			this.setState({showLightbool: "true"});
		}

		/*let newNumCount = this.state.num + 1;
		this.setState({num: newNumCount});*/
	}

	render() {
		return (
			var flipClass = classNames({
				'flipping': true,
				'flipped': this.state.flipped
			});
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

export default PortfolioPiece;