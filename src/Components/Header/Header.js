// React and CSS
import React, { Component } from "react";
import "./Header.css";

// Component
import DropdownMenu from "../DropdownMenu/DropdownMenu";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class Header extends Component {
	
	// Show the about us modal
	showAbout = () => {
		const newModal = {
			show: true,
			name: "About",
			desc: `<div class="about-container">
						<p class="modal-p">Developed by <a class="name-tag" href="https://www.gavinbaxter.com" target="_blank">www.gavinbaxter.com</a><br>
						Feedback? <a class="name-tag" href="mailto:gav.bax@gmail.com">Email me here</p>
						<div class="flex-full flex-row icon-row">
							<a href="https://reactjs.org/" target="_blank" class="flex-full flex-col tech-button">
								<img class="tech-icons" src="./assets/icon_react.png" height="35"/>
								<p class="icon-subtext">React</p>
							</a>
							<a href="https://redux.js.org/" target="_blank" class="flex-full flex-col tech-button">
								<img class="tech-icons" src="./assets/icon_redux.png" height="35"/>
								<p class="icon-subtext">Redux</p>
							</a>
							<a href="https://nodejs.org/en/" target="_blank" class="flex-full flex-col tech-button">
								<img class="tech-icons" src="./assets/icon_node.png" height="35"/>
								<p class="icon-subtext">Node</p>
							</a>
							<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="flex-full flex-col tech-button">
								<img class="tech-icons" src="./assets/icon_js.png" height="35"/>
								<p class="icon-subtext">ES6</p>
							</a>
							<a href="https://scryfall.com/" target="_blank" class="flex-full flex-col tech-button">
								<img class="tech-icons" src="./assets/icon_scryfall.svg" height="35"/>
								<p class="icon-subtext">Scryfall</p>
							</a>
						</div>
					</div>
				`
		};

		this.props.updateModal(newModal);
	}
	
	// Show the how-to modal
	showHowTo = () => {
		const newModal = {
			show: true,
			name: "How-To",
			desc: `<p class="modal-p">The PlayAroundMe calculator is used to determine what instant effects your opponent could have given their available resources so that you may better 'play around' those effects. This tool is most useful when drafting a new set with still unfamiliar cards.</p>
					<ul class="how-to-list mtop20">
						<li>Select the set you are playing.</li>
						<li>Input your opponent's available mana resources.</li>
						<li>Click <span class="modal-calculate">Calculate</span> to see what they may have.</li>
						<li>Sort results by clicking <span class="modal-calculate">CMC</span>, <span class="modal-calculate">Removal</span>, etc.</li>
					</ul>
					<p class="modal-p mtop20">It's too much trouble to build in unique mana effects as they're printed (for example  <a href="https://scryfall.com/card/m21/382/chromatic-orrery" target="_blank" class="name-tag">Chromatic Orrery</a>) so this will remain a simple tool. </p>`
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

// Redux
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Header);