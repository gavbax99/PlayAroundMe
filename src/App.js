import React, { Component } from 'react';

// CSS
import './App.css';
import './Reset.css';

// Components
import Header from './Components/Header/Header';
import Calculator from './Components/Calculator/Calculator';
import Modal from './Components/Modal/Modal';
import SetCreator from './Components/SetCreator/SetCreator';

class App extends Component {

	render() {

		const href = window.location.href;

		if (href.includes("setcreator")) {
			return (
				<div className="screen">
					<SetCreator />
				</div>
			);
		} else {
			return (
				<div className="screen">
					<Header />
					<Calculator />
					<Modal />
				</div>
			);
		}
	};

};

export default App;