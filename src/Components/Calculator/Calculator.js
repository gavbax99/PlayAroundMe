import React, { Component } from "react";
import "./Calculator.css";

import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import CalculatorOutput from "../CalculatorOutput/CalculatorOutput";

class Calculator extends Component {

    render() {
        return (
			<div className="calculator">
				<CalculatorButtons />
				<CalculatorOutput />
			</div>
        );
    };

};

export default Calculator;