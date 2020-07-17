import React, { Component } from "react";
import "./DropdownMenu.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class DropdownMenu extends Component {

	state = {
		hiddenMenu: false,
	}

	toggleMenu = () => {
		this.setState({ hiddenMenu: !this.state.hiddenMenu });
	}

	// test = () => {
		// this works - action
		// this.props.changeSet("setM21");
	// }

	render = () => {
		const iconPath = `./assets/setIcons/${this.props.storeData.setInfo.code}black.svg`;

		let hiddenMenuClasses = "set-list hidden";
		if (this.state.hiddenMenu) {
			hiddenMenuClasses = "set-list"
		}

		return (
			<div className="dropdown-container">
				<div className="flex-full flex-row dropdown-menu" onClick={this.toggleMenu}>
					<img className="set-icon" src={iconPath} alt="Current set icon"/>
					<p className="set-name">{this.props.storeData.setInfo.name}</p>
					<img src="./assets/downarrow.svg" width="8" alt="Down arrow icon"/>
				</div>

				<div id="menu-list" className={hiddenMenuClasses}>

					<button className="flex-full flex-row set-button">
						<img className="set-icon" src="./assets/setIcons/M21black.svg" alt="M21 set icon"/>
						<span className="set-name set-name-list">Core Set 2021</span>
					</button>

					<button className="flex-full flex-row set-button">
						<img className="set-icon" src="./assets/setIcons/IKOblack.svg" alt="Ikoria set icon"/>
						<span className="set-name set-name-list">Ikoria</span>
					</button>

				</div>
			</div>
		);
	};

};

const mapStateToProps = state => ({storeData: state.setData});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);