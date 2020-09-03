// React and CSS
import React, { Component } from "react";
import "./DropdownMenu.css";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class DropdownMenu extends Component {

	state = {
		hiddenMenu: false,
	}

	// Toggles set menu open/closed
	toggleMenu = () => {
		this.setState({ hiddenMenu: !this.state.hiddenMenu });
	}

	// Updates the set
	changeSet = (e) => {
		console.log(e.target.getAttribute("set"));
		this.toggleMenu();
		this.props.updatePayedForArray([])
		this.props.updateSourceArray([]);
		this.props.changeSet(e.target.getAttribute("set"));
	}

	render = () => {
		const iconPath = `./assets/setIcons/${this.props.storeData.setInfo.code}black.svg`;

		let hiddenMenuClasses = "set-list set-visibility";
		let fullCloseHiddenMenu = "hidden";
		if (this.state.hiddenMenu) {
			hiddenMenuClasses = "set-list"
			fullCloseHiddenMenu = "full-close"
		}

		return (
			<div className="dropdown-container">
				<div className="flex-full flex-row dropdown-menu" onClick={this.toggleMenu}>
					<img className="set-icon" src={iconPath} alt="Current set icon"/>
					<p className="set-name">{this.props.storeData.setInfo.name}</p>
					<img src="./assets/downarrow.svg" width="8" alt="Down arrow icon"/>
				</div>

				<div className={fullCloseHiddenMenu} onClick={this.toggleMenu}></div>

				{/* SET LIST */}
				<div className={hiddenMenuClasses}>

					{/* Jumpstart */}
					{/* <button className="flex-full flex-row set-button" set="setJMP" onClick={this.changeSet}>
						<img className="set-icon" src="./assets/setIcons/JMPblack.svg" alt="Jumpstart set icon" set="setJMP"/>
						<span className="set-name set-name-list" set="setJMP">Jumpstart</span>
					</button> */}

					{/* M21 */}
					<button className="flex-full flex-row set-button" set="setM21" onClick={this.changeSet}>
						<img className="set-icon" src="./assets/setIcons/M21black.svg" alt="M21 set icon" set="setM21"/>
						<span className="set-name set-name-list" set="setM21">Core Set 2021</span>
					</button>

				</div>
			</div>
		);
	};

};

// Redux
const mapStateToProps = state => ({storeData: state.setData});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);