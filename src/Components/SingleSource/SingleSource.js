import React, { Component } from "react";
import "./SingleSource.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class SingleSource extends Component {

	pushSource = (e) => {

		// calculate permutations
		const perms = this.props.storeData.reduce((t, val) => {
			return val.perms * t
		}, 1);
		if (perms > 50000) {
			const obj = {
				name: "Too many permutations.",
				desc: `<p class="modal-p">The Calculator must go through each permutation of the different sources provided. You have selected sources that exceed 50,000 permutations which will have an impact on performance. Try reducing the number of five color sources.`
			}
			this.openModal(obj);
			return;
		}

		// calculkate # of cards
		if (this.props.storeData.length > 10) {
			const obj = {
				name: "Too many sources.",
				desc: `<p class="modal-p">The Calculator may only have eleven mana sources.`
			}
			this.openModal(obj);
			return;
		}

		const newObj = {
			perms: e.target.getAttribute("perms"),
			image: e.target.getAttribute("image")
		}

		if (e.target.getAttribute("manarr")) newObj.manarr = e.target.getAttribute("manarr");
		if (e.target.getAttribute("mana")) newObj.mana = e.target.getAttribute("mana");

		this.props.updateSourceArray([...this.props.storeData, newObj]);
	}

	openModal = obj => {
		const newObj = {
			show: true,
			name: obj.name,
			desc: obj.desc
		}
		this.props.updateModal(newObj);
	}

	render() {
		const scryfall = "https://img.scryfall.com/cards/large/front/";

		return (
			<button 
				style={{ backgroundImage: `url(${scryfall}${this.props.singleData.imageUrl}.jpg)`}}
				image={this.props.singleData.imageUrl}
				perms={this.props.singleData.perms}
				manarr={this.props.singleData.manarr} 
				mana={this.props.singleData.mana} 
				className={"flex-full land-button"}
				onClick={this.pushSource}>

				{this.props.singleData.name}

			</button>
		);
	};

};

const mapStateToProps = state => ({storeData: state.sourceArr});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(SingleSource);

