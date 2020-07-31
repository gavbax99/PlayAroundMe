import React, { Component } from "react";
import "./CalculatorButtons.css";

import SourcesContainer from "../SourcesContainer/SourcesContainer";
import SourceGroup from "../SourceGroup/SourceGroup";
import BottomButtons from "../BottomButtons/BottomButtons";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class CalculatorButtons extends Component {

	render() {
		const renderManaSources = this.props.storeData.sources.sourceOrder.map((str, i) => {
			return (
				<SourceGroup 
					groupName={str}
					groupData={this.props.storeData.sources[str]}
					key={i}/>
			);
		});

		return (
			<div className="lands">
				<SourcesContainer />

				<div className="flex-full flex-row title-container">
					<h1>Mana Sources</h1>
					<img src={`./assets/setIcons/${this.props.storeData.setInfo.code}black.svg`} height="20" alt="Current set icon" />
				</div>

				<div id="land-output" className="land-output">
					{renderManaSources}
				</div>

				<BottomButtons />
			</div>
		);
	};

};

const mapStateToProps = state => ({storeData: state.setData});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButtons);