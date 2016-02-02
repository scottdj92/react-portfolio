import React from 'react';
import PortfolioPiece from './portfolio-piece.jsx';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.props = {
			test: "test"
		};

		this.state = {
			numPieces: 4,
			pieces: []
		};

		for (var i=0; i<=this.state.numPieces; i++) {
			this.state.pieces.push(<PortfolioPiece/>);
		};
	}
	render() {
		return (
			<div>
				<h1>Portfolio</h1>
				<section>
					<ol>
						{this.state.pieces.map(function(piece, i){
							return <div key={i}>{piece}</div>
						})}
					</ol>
				</section>
			</div>
		);
	}
}