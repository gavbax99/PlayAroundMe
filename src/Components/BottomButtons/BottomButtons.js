// React and CSS
import React, { Component } from "react";
import "./BottomButtons.css";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class BottomButtons extends Component {

	// 1) calculate button - build input array
	buildInputArray = () => {
		let inputArr = [];
		if (this.props.storeSourceArr.length === 0) return;
		this.props.storeSourceArr.forEach(sourceObj => {
			if (sourceObj.manarr) {
				const arrHold = sourceObj.manarr.split(",")
				arrHold.forEach(el => inputArr.push([...el]));
			} else {
				const single = sourceObj.mana.split("");
				inputArr.push(single);
			}
		});
		
		this.calculateCost(inputArr);
	}

	// 2) calculate costs
	calculateCost = inputArr => {
		// clear payedFor
		let payedFor = [];

		// if (inputArr.length === 1) inputArr = [...inputArr];

		// sort array big to small
		inputArr.sort((a, b) => b.length - a.length);

		// find permutations of array
		const perm = inputArr.reduce((t, val) => t * val.length, 1);
		
		// build permutations array
		let outputArray = Array(perm).fill([]);

		// number of first repatitions based on first index
		let numHold = perm / inputArr[0].length;

		// iterate through the sources array
		inputArr.forEach((val, i) => {
			// update numhold based on last 
			if (val.length === 1 && numHold === 1) numHold = 0;
			if (i > 0) numHold = 1 / val.length * numHold;

			// pointer for which index to add
			let indexToAdd = 0;

			for (let j = 1; j <= perm; j++) {
				// update the array with the index pointer
				outputArray[j - 1] = [...outputArray[j - 1], val[indexToAdd]];

				// update the index pointer based on numhold
				if (numHold !== 0 && j % numHold === 0 && indexToAdd !== val.length - 1) {
					indexToAdd++;
				} else if (j % numHold === 0 && indexToAdd === val.length - 1 && indexToAdd !== 0) {
					indexToAdd = 0;
				}
			}
		});

		// filter the array down to unique values
		const filteredArray = outputArray.map(val => val.sort()).map(JSON.stringify).filter(function (val, i, a) {
			return a.indexOf(val, i + 1) === -1;
		}).map(JSON.parse);

		// iterate through cards to compare mana to costs
		this.props.storeSetData.cards.forEach(card => {
			// this.cardCost(card, filteredArray);
			for (let i = 0; i < card.cost.length; i++) {
				// assign cost of card to array to comapre against
				let costArr = [...card.cost[i]];
				// if this switches to true, we can skip the rest of the check
				let paidForCard = false;
	
				filteredArray.forEach(singleFilteredArray => {
					if (paidForCard) return;
	
					// assign mana to array to compare against
					let manaArr = [...singleFilteredArray];
	
					// for each mana, check if it exists in the card cost. if so, remove those values from their espective arrays
					singleFilteredArray.forEach(mana => {
						const costI = costArr.indexOf(mana);
						if (costI >= 0) {
							costArr.splice(costI, 1);
							manaArr.splice(manaArr.indexOf(mana), 1);
						};
					});
	
					// after going through your mana, push the card if there are no more colored sources and you have more mana than the remaining generic cost
					if (costArr.join("").search(/\D/) === -1 && manaArr.length >= costArr.length && !paidForCard) {
						paidForCard = true;
						payedFor.push(card);
					} else {
						costArr = [...card.cost[0]];
					}
				});
			};
		});

		const sortByCSButton = payedFor.some(cardObj => {
			return cardObj.counterspell === 1;
		});

		const sortByRemovalButton = payedFor.some(cardObj => {
			return cardObj.removal === 1;
		});

		const sortByPumpButton = payedFor.some(cardObj => {
			return cardObj.pump === 1;
		});

		// update which filter buttons will be shown
		this.props.updateCSButton(sortByCSButton);
		this.props.updateRemovalButton(sortByRemovalButton);
		this.props.updatePumpButton(sortByPumpButton);

		this.props.updateSortText("Severity");
		this.props.updatePayedForArray(payedFor.sort((a, b) => a.sev - b.sev));
	}

	// clear button
	clearSourcesArr = () => {
		this.props.updatePayedForArray([])
		this.props.updateSourceArray([]);
	}

	render() {
		return (
			<div className="flex-full flex-row submit-button-container">
				<div className="flex-full submit-button" onClick={this.buildInputArray}>Calculate</div>
				<div className="flex-full clear-button" onClick={this.clearSourcesArr}>Clear</div>
			</div>
		);
	};
	
};

// Redux
const mapStateToProps = state => ({
	storeSourceArr: state.sourceArr,
	storeSetData: state.setData
});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(BottomButtons);