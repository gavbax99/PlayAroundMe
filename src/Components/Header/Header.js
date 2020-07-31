import React, { Component } from "react";
import "./Header.css";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class Header extends Component {
	
	showAbout = () => {
		const newModal = {
			show: true,
			name: "About",
			desc: `<div class="about-container">Developed by: <a class="name-tag" href="https://www.gavinbaxter.com" target="_blank">gavinbaxter.com</a>
						<div class="flex-full flex-row icon-row">
							<img class="tech-icons" src="./assets/icon_react.png" height="38"/>
							<img class="tech-icons" src="./assets/icon_redux.png" height="38"/>
							<img class="tech-icons" src="./assets/icon_node.png" height="38"/>
							<img class="tech-icons" src="./assets/icon_js.png" height="38"/>
						</div>
					</div>
				`
		};

		this.props.updateModal(newModal);
	}
	
	showHowTo = () => {
		const newModal = {
			show: true,
			name: "How-To",
			desc: `<p class="modal-p">The PlayAroundMe calculator is used to determine what instant effects your opponent could have given their available resources so that you may better 'play around' those effects. This tool is most useful when drafting a new set with still unfamiliar cards.</p>
					<ul class="how-to-list">
						<li>Select the set you are playing.</li>
						<li>Input your opponent's availialbe mana resources.</li>
						<li>Click <span class="modal-calculate">Calculate</span> to see what they may have.</li>
						<li>Sort results by clicking <span class="modal-calculate">CMC</span>, <span class="modal-calculate">Removal</span>, etc.</li>
					</ul>`
		};

		this.props.updateModal(newModal);
	}

    render() {
        return (
			<header className="header-container">
                <img src="./assets/logo.svg" width="40" alt="PlayAroundMe logo" />
				<div className="flex-full flex-row">
					<button className="header-link" onClick={this.showHowTo}>How-To</button>
					<button className="header-link" onClick={this.showAbout}>About</button>
					<DropdownMenu />
				</div>
            </header>
        );
    }

}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Header);