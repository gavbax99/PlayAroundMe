import React, { Component } from 'react';

// CSS
import './App.css';
import './Reset.css';

// Components
import Header from './Components/Header/Header';
import Calculator from './Components/Calculator/Calculator';

class App extends Component {

	render() {
		return (
			<div className="screen">
				<Header />
				<Calculator />
			</div>
		);
	};

};

export default App;
