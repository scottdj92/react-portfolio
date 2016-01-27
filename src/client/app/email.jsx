import React from 'react';
import cx from 'classnames';

export default class Email extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sent: false,
			sentText: ""
		};
		this.sendForm = this.sendForm.bind(this);
	}

	sendForm() {
		//submit form
		this.setState({
			sent: true,
			sentText: "Sent!"
		});
	}

	render() {
		let names = cx({
			'sent': this.state.sent
		});

		return (
			<div className="email">
				<h4>Send me an email!</h4>
				<form>
					<input type='email'/>
					<input type='textarea'/>

					<input type='button' onClick={this.sendForm}/>
				</form>
				<span className={names}>{this.state.sentText}</span>
			</div>
		);
	}
}
