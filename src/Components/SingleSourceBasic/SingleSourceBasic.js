import React, { Component } from "react";
import "./SingleSourceBasic.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class SingleSourceBasic extends Component {

	pushSource = (e) => {
		if (this.props.storeData.length > 10) return;
		this.props.updateSourceArray([...this.props.storeData, e.target.getAttribute("image")]);
	}

	render() {
		const scryfall = "https://img.scryfall.com/cards/large/front/";

		return (
			<button 
				style={{ backgroundImage: `url(${scryfall}${this.props.singleData.imageUrl}.jpg)`}}
				image={this.props.singleData.imageUrl}
				mana={this.props.singleData.mana} 
				className={"flex-full land-button regbasics-button"}
				onClick={this.pushSource}>

				<img image={this.props.singleData.imageUrl} className="basic-icon" src={this.props.singleData.manaSymbol} alt="Basic land icon" />

			</button>
		);
	};

};

const mapStateToProps = state => ({storeData: state.sourceArr});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(SingleSourceBasic);

