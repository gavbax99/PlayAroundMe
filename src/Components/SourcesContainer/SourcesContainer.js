import React, { Component } from "react";
import "./SourcesContainer.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class SourcesContainer extends Component {

	removeSource = (e) => {
		const iToRemove = parseInt(e.target.getAttribute("i"));
		let newSourceArray = [...this.props.storeData];
		newSourceArray.splice(iToRemove, 1);
		this.props.updateSourceArray([...newSourceArray]);
	}

	render = () => {
		const scryfall = "https://img.scryfall.com/cards/large/front/";
		const renderSources = this.props.storeData.map((sourceImage, i) => {
			return (
				<li className="source-list-item" key={`${sourceImage}${i}`} onClick={this.removeSource}>
					<img src={`${scryfall}${sourceImage}.jpg`} height="95" alt="land" i={i} />
				</li>
			);
		});

		return (
			<div className="flex-full flex-row sources-container">
				<ul className="flex-full flex-row">
					{renderSources}
				</ul>
			</div>
		);
	};

};

const mapStateToProps = state => ({storeData: state.sourceArr});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(SourcesContainer);