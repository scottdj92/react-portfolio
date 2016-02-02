import React from 'react';
import cx from 'classnames';

export default class PortfolioPiece extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLightbool: "false", 
			num: 0,
			p1: {
				content: "piece #1 content",
				link: "link",
				linkPath: "#",
				img: "imgPath"
			}
		};
	}

	render() {
		let classes = cx({
				'flipping': true,
				'flipped': this.state.flipped
			});
		return (
			<div className='portfolioPiece' onClick={this.showLightbox}>
				<h4>Portfolio Piece Title</h4>
				<p>{this.state.p1.content}</p>
				<a href={this.state.p1.linkPath}>{this.state.p1.link}</a>
			</div>
		);
	}
}