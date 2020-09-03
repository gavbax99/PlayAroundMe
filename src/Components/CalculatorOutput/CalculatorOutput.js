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

	sortByCMC = () => {
		let newArr = [...this.props.storePayedFor];
		newArr.sort((a, b) => b.cmc - a.cmc);
		this.props.updatePayedForArray(newArr);
	}

	sortBySeverity = () => {
		let newArr = [...this.props.storePayedFor];
		newArr.sort((a, b) => a.sev - b.sev);
		this.props.updatePayedForArray(newArr);
	}

	sortByColor = () => {
		let newArr = [...this.props.storePayedFor];
		newArr.sort((a, b) => a.color - b.color);
		this.props.updatePayedForArray(newArr);
	}

	sortByCounterspell = () => {
		let newArr = [...this.props.storePayedFor];
		newArr.sort((a, b) => b.counterspell - a.counterspell);
		this.props.updatePayedForArray(newArr);
	}

	sortByRemoval = () => {
		let newArr = [...this.props.storePayedFor];
		newArr.sort((a, b) => b.removal - a.removal);
		this.props.updatePayedForArray(newArr);
	}

	sortByPump = () => {
		let newArr = [...this.props.storePayedFor];
		newArr.sort((a, b) => b.pump - a.pump);
		this.props.updatePayedForArray(newArr);
	}

	render = () => {
		// update css classes
		let screenClass = `flex-full flex-col output ${this.props.storeSetData.setInfo.code}bg`;

		let addCardsClass = "output-get-started hider";
		let sortClass = "flex-full flex-row";
		if (this.props.storePayedFor.length === 0) {
			addCardsClass = "output-get-started";
			sortClass = "flex-full flex-row hider";
		};

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

		// render payed-for cards
		const renderPayedForCards = this.props.storePayedFor.map((cardObj, i) => {
			return (
				<PayedForCard 
					imageUrl={cardObj.imageUrl}
					key={i}/>
			);
		});

		return (
			<div className={screenClass}>
				<div className="flex-full flex-row sort-container">
					<p className={addCardsClass}>
						Add your opponent's open mana sources and click Calculate.
					</p>
					<div className={sortClass}>
						<p className="flex-full output-title">
							Sort By:
						</p>
						<div className="flex-full flex-row button-container">
							<button className="sort-button" onClick={this.sortByCMC}>CMC</button>
							<button className="sort-button" onClick={this.sortBySeverity}>Severity</button>
							<button className="sort-button" onClick={this.sortByColor}>Color</button>
							<button className={csButton} onClick={this.sortByCounterspell}>Counterspell</button>
							<button className={removalButton} onClick={this.sortByRemoval}>Removal</button>
							<button className={pumpButton} onClick={this.sortByPump}>Pump</button>
						</div>
					</div>
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
});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorOutput);