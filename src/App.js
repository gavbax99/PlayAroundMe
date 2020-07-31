import React, { Component } from 'react';

// CSS
import './App.css';
import './Reset.css';

// Components
import Header from './Components/Header/Header';
import Calculator from './Components/Calculator/Calculator';
import Modal from './Components/Modal/Modal';

class App extends Component {

	render() {
		return (
			<div className="screen">
				<Header />
				<Calculator />
				<Modal />
			</div>
		);
	};

};

export default App;








// import React, { Component } from 'react';

// // CSS
// import './App.css';
// import './Reset.css';

// // Components
// import Header from './Components/Header/Header';
// import Calculator from './Components/Calculator/Calculator';

// class App extends Component {

// 	render() {
// 		return (
// 			<div className="screen">
// 				<Header />
// 				<Calculator />
// 			</div>
// 		);
// 	};

// };

// export default App;
