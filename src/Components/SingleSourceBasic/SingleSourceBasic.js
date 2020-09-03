// React and CSS
import React, { Component } from "react";
import "./SingleSourceBasic.css";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class SingleSourceBasic extends Component {

	// pushes a mana source to the calculator
	pushSource = (e) => {
		// calculate permutations
		const perms = this.props.storeData.reduce((t, val) => {
			return val.perms * t
		}, 1);
		if (perms > 50000) {
			const obj = {
				name: "Too many permutations.",
				desc: "The Calculator must go through each permutation of the different sources provided. You have selected sources that exceed 50,000 permutations which will have an impact on performance. Try reducing the number of five color sources."
			}
			this.openModal(obj);
			return;
		}

		// calculkate # of cards
		if (this.props.storeData.length > 10) {
			const obj = {
				name: "Too many sources.",
				desc: "The Calculator may only have eleven mana sources."
			}
			this.openModal(obj);
			return;
		}

		const newObj = {
			mana: e.target.getAttribute("mana"),
			perms: e.target.getAttribute("perms"),
			image: e.target.getAttribute("image")
		}
		this.props.updateSourceArray([...this.props.storeData, newObj]);
	}

	// opens modal
	openModal = obj => {
		const newObj = {
			show: true,
			name: obj.name,
			desc: obj.desc
		}
		this.props.updateModal(newObj);
	}

	render() {
		const scryfall = "https://img.scryfall.com/cards/small/front/";

		return (
			<button 
				style={{ backgroundImage: `url(${scryfall}${this.props.singleData.imageUrl}.jpg)`}}
				image={this.props.singleData.imageUrl}
				perms={this.props.singleData.perms}
				mana={this.props.singleData.mana} 
				className={"flex-full land-button regbasics-button"}
				onClick={this.pushSource}>

				<img 
					perms={this.props.singleData.perms}
					mana={this.props.singleData.mana} 
					image={this.props.singleData.imageUrl} 
					className="basic-icon" 
					src={this.props.singleData.manaSymbol} 
					alt="Basic land icon" />

			</button>
		);
	};

};

// Redux
const mapStateToProps = state => ({storeData: state.sourceArr});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(SingleSourceBasic);

