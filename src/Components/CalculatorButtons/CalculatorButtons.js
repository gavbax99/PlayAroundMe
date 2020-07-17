import React, { Component } from "react";
import "./CalculatorButtons.css";

import SourcesContainer from "../SourcesContainer/SourcesContainer";
import SourceGroup from "../SourceGroup/SourceGroup";

import { connect } from "react-redux";

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
					<h1>Input Sources</h1>
					<img src={this.props.storeData.setInfo.calculatorIcon} width="50" alt="Current set icon" />
				</div>

				<div id="land-output" className="land-output">
					{renderManaSources}
				</div>

				<div className="flex-full flex-row submit-button-container">
					<div className="flex-full submit-button">Calculate</div>
					<div className="flex-full clear-button">Clear</div>
				</div>
			</div>
		);
	};

};

const mapStateToProps = state => ({ storeData: state.setData });
export default connect(mapStateToProps)(CalculatorButtons);