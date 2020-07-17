import React, { Component } from "react";
import "./SingleSource.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class SingleSource extends Component {

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

