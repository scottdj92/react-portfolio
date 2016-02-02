import React from 'react';
import {render} from 'react-dom';
import '../scss/main.scss';

//import components
import NavBar from './nav-bar.jsx';
import Header from './header.jsx';
import Biography from './biography.jsx';
import Portfolio from './portfolio.jsx';
import Email from './email.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<NavBar/>
				<div className="main">
					<Header/>
					<Biography/>
					<Portfolio/>
					<Email/>
					<Footer/>
				</div>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));