import React from 'react';

class PortfolioPiece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showLightbool: "false", num: 0};
		this.showLightbox = this.showLightbox.bind(this);
	}

	showLightbox() {
		console.log('clicked');
		if(this.state.showLightbool === "true") {
			this.setState({showLightbool: "false"});
		} else {
			this.setState({showLightbool: "true"});
		}

		/*let newNumCount = this.state.num + 1;
		this.setState({num: newNumCount});*/
	}

	render() {
		return (
			<div className='portfolioPiece' onClick={this.showLightbox}>
				<h4>portfolio pieces here lololol</h4>
				<span>{this.state.showLightbool}</span>
			</div>
		);
	}
}

export default PortfolioPiece;