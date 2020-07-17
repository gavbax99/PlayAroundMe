import React, { Component } from "react";
import "./CalculatorOutput.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class CalculatorOutput extends Component {

	render() {
		const screenClass = `output ${this.props.storeData.setData.setInfo.code}bg`;

		return (
			<div className={screenClass}>
			</div>
		);
	};

};

const mapStateToProps = state => ({storeData: state});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorOutput);