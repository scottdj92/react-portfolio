import React from 'react';
import {render} from 'react-dom';
import '../scss/main.scss';

//import components
import Header from './header.jsx';
import Biography from './biography.jsx';
import Portfolio from './portfolio.jsx';
import Email from './email.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<Header/>
				<Biography/>
				<Portfolio/>
				<Email/>
				<Footer/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));