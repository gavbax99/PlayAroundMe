// React and CSS
import React, { Component } from "react";
import "./CalculatorOutput.css";

// Component
import PayedForCard from "../PayedForCard/PayedForCard";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class CalculatorOutput extends Component {

	state = {
		hiddenMenuMobile: false,
	}

	// Toggles set menu open/closed
	toggleMenu = () => {
		this.setState({ hiddenMenuMobile: !this.state.hiddenMenuMobile });
	}

	// add/remove scroll listeners
	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	}

	// scrolling to cards when on mobile
	componentDidUpdate = () => {
		if (this.props.storePayedFor.length !== 0 && window.innerWidth < 970) {
			const displayAnchor = document.querySelector("#display-anchor");

			setTimeout(() => {
				window.scrollTo({
					top: displayAnchor.offsetTop,
					left: 0,
					behavior: 'smooth'
				});
			}, 100);
		}
	}

	// scrolling to top
	scrollToTop = () => {
		console.log("h");
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	// handle scroll
	handleScroll = (event) => {
		const arrow = document.querySelector(".sort-uparrow-container");

		if (window.innerWidth > 970) {
			if (window.pageYOffset > 73) {
				arrow.classList.add("sort-uparrow-opacity-on");
			} else {
				arrow.classList.remove("sort-uparrow-opacity-on");
			}
		} else {
			if (window.pageYOffset > 52) {
				arrow.classList.add("sort-uparrow-opacity-on");
			} else {
				arrow.classList.remove("sort-uparrow-opacity-on");
			}
		}
	}

	// mobile sort
	// mobileSort = (e) => {
	// 	const sort = e.target.getAttribute("sort");
	// 	switch (sort) {
	// 		case "CMC":
	// 			this.sortbyCMC();
	// 			break;
	// 		case "Severity":
	// 			this.sortbySeverity();
	// 			break;
	// 		case "Color":
	// 			this.sortbyColor();
	// 			break;
	// 		case "Counterspell":
	// 			this.sortbyCounterspell();
	// 			break;
	// 		case "Removal":
	// 			this.sortbyRemoval();
	// 			break;
	// 		case "Pump":
	// 			this.sortbyPump();
	// 			break;
	// 		default: break;
	// 	}
	// 	this.props.updateSortText(sort);
		
	// }

	sort = (e) => {
		let newArr = [...this.props.storePayedFor];

		const sort = e.target.getAttribute("sortby");
		const mobile = e.target.getAttribute("ismobile");

		switch (sort) {
			case "CMC":
				newArr.sort((a, b) => b.cmc - a.cmc);
				break;
			case "Severity":
				newArr.sort((a, b) => a.sev - b.sev);
				break;
			case "Color":
				newArr.sort((a, b) => a.color - b.color);
				break;
			case "Counterspell":
				newArr.sort((a, b) => b.counterspell - a.counterspell);
				break;
			case "Removal":
				newArr.sort((a, b) => b.removal - a.removal);
				break;
			case "Pump":
				newArr.sort((a, b) => b.pump - a.pump);
				break;
			default: break;
		}

		if (mobile === "true") this.setState({ hiddenMenuMobile: !this.state.hiddenMenuMobile });
		
		this.props.updateSortText(sort);
		this.props.updatePayedForArray(newArr);
	}

	// sortbyCMC = () => {
	// 	let newArr = [...this.props.storePayedFor];
	// 	newArr.sort((a, b) => b.cmc - a.cmc);
	// 	this.props.updateSortText("CMC");
	// 	this.props.updatePayedForArray(newArr);
	// }

	// sortbySeverity = () => {
	// 	let newArr = [...this.props.storePayedFor];
	// 	newArr.sort((a, b) => a.sev - b.sev);
	// 	this.props.updateSortText("CMC");
	// 	this.props.updatePayedForArray(newArr);
	// }

	// sortbyColor = () => {
	// 	let newArr = [...this.props.storePayedFor];
	// 	newArr.sort((a, b) => a.color - b.color);
	// 	this.props.updateSortText("CMC");
	// 	this.props.updatePayedForArray(newArr);
	// }

	// sortbyCounterspell = () => {
	// 	let newArr = [...this.props.storePayedFor];
	// 	newArr.sort((a, b) => b.counterspell - a.counterspell);
	// 	this.props.updatePayedForArray(newArr);
	// }

	// sortbyRemoval = () => {
	// 	let newArr = [...this.props.storePayedFor];
	// 	newArr.sort((a, b) => b.removal - a.removal);
	// 	this.props.updatePayedForArray(newArr);
	// }

	// sortbyPump = () => {
	// 	let newArr = [...this.props.storePayedFor];
	// 	newArr.sort((a, b) => b.pump - a.pump);
	// 	this.props.updatePayedForArray(newArr);
	// }

	render = () => {
		// update css classes
		let screenClass = `flex-full flex-col output ${this.props.storeSetData.setInfo.code}bg`;

		let addCardsClass = "output-get-started hider";
		let sortClass = "flex-full flex-row";
		if (this.props.storePayedFor.length === 0) {
			addCardsClass = "output-get-started";
			sortClass = "flex-full flex-row hider";
		};

		// showing sort buttons
		let csButton = "sort-button";
		if (!this.props.storeCSButton) {
			csButton = "sort-button hider";
		};

		let removalButton = "sort-button";
		if (!this.props.storeRemovalButton) {
			removalButton = "sort-button hider";
		};

		let pumpButton = "sort-button";
		if (!this.props.storePumpButton) {
			pumpButton = "sort-button hider";
		};

		// showing mobile sort menu
		let hiddenMenuClassesMobile = "set-list sort-visibility";
		let fullCloseHiddenMenuMobile = "hidden";
		
		if (this.state.hiddenMenuMobile) {
			hiddenMenuClassesMobile = "sort-list"
			fullCloseHiddenMenuMobile = "full-close"
		}

		// render payed-for cards
		const renderPayedForCards = this.props.storePayedFor.map((cardObj, i) => {
			return (
				<PayedForCard 
					imageUrl={cardObj.imageUrl}
					key={i}/>
			);
		});

		return (
			<div ref={this.displayRef} id="display-anchor" className={screenClass}>
				<div className="flex-full flex-row sort-container">

					{/* Shown when screen empty */}
					<p className={addCardsClass}>
						Add your opponent's open mana sources and click&nbsp;Calculate.
					</p>

					{/* Sort */}
					<div className={sortClass}>
						<p className="output-title">
							Sort By:
						</p>

						{/* Desktop */}
						<div className="flex-full flex-row button-container">
							<button className="sort-button" ismobile="false" sortby="CMC" onClick={this.sort}>CMC</button>
							<button className="sort-button" ismobile="false" sortby="Severity" onClick={this.sort}>Severity</button>
							<button className="sort-button" ismobile="false" sortby="Color" onClick={this.sort}>Color</button>
							<button className={csButton} ismobile="false" sortby="Counterspell" onClick={this.sort}>Counterspell</button>
							<button className={removalButton} ismobile="false" sortby="Removal" onClick={this.sort}>Removal</button>
							<button className={pumpButton} ismobile="false" sortby="Pump" onClick={this.sort}>Pump</button>
						</div>

						{/* Mobile ======== THIS CAN BE DRILLED DOWN INTO A COMPONENT to prevent unecessary updates (also messes with screen scroll) */}
						<div className="flex-full flex-row button-dropdown-mobile" onClick={this.toggleMenu}>
							<p className="set-name sort-name-mobile">{this.props.storeSortText}</p>
							<img src="./assets/downarrow.svg" width="8" alt="Down arrow icon"/>

							<div className={fullCloseHiddenMenuMobile} onClick={this.toggleMenu}></div>

							{/* SORT LIST */}
							<div className={hiddenMenuClassesMobile}>	
								<button className="flex-full flex-row set-button" ismobile="true" sortby="CMC" onClick={this.sort}>
									CMC
								</button>
								<button className="flex-full flex-row set-button" ismobile="true" sortby="Severity" onClick={this.sort}>
									Severity
								</button>
								<button className="flex-full flex-row set-button" ismobile="true" sortby="Color" onClick={this.sort}>
									Color
								</button>
								<button className="flex-full flex-row set-button" ismobile="true" sortby="Counterspell" onClick={this.sort}>
									Counterspell
								</button>
								<button className="flex-full flex-row set-button" ismobile="true" sortby="Removal" onClick={this.sort}>
									Removal
								</button>
								<button className="flex-full flex-row set-button" ismobile="true" sortby="Pump" onClick={this.sort}>
									Pump
								</button>

							</div>
						</div>

					</div>

					{/* Top of page button */}
					<button className="sort-uparrow-container" onClick={this.scrollToTop}>
						<img src="./assets/uparrow.svg" className="sort-uparrow" alt="Go to the top of the page icon."/>
					</button>
				</div>

				<div className="flex-full flex-row rendered-payed-for-container">
					{renderPayedForCards}
				</div>
			</div>
		);
	};

};

// Redux
const mapStateToProps = state => ({
	storeSetData: state.setData,
	storePayedFor: state.payedForArr,
	storeCSButton: state.csButton,
	storeRemovalButton: state.removalButton,
	storePumpButton: state.pumpButton,
	storeSortText: state.sortText,
});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorOutput);