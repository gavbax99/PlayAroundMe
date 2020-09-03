// React and CSS
import React, { Component } from "react";
import "./SourceGroup.css";

// Components
import SingleSource from "../SingleSource/SingleSource";
import SingleSourceBasic from "../SingleSourceBasic/SingleSourceBasic";

class SourceGroup extends Component {

	render() {
		let renderSingleSources = [];

		if (this.props.groupData[0].name === "Plains") {
			// if basic sources
			renderSingleSources = this.props.groupData.map((obj, i) => {
				return (
					<SingleSourceBasic 
						singleData={obj}
						key={i}/>
				);
			});
		} else {
			// if non basic sources
			renderSingleSources = this.props.groupData.map((obj, i) => {
				return (
					<SingleSource 
						singleData={obj}
						key={i}/>
				);
			});
		}

		return (
			<div>
				<p className="tagline">{this.props.groupName.replace(/\$/g, " ")}</p>
				<div className="flex-full flex-row land-container regbasics-container">
					{renderSingleSources}
				</div>
			</div>
		);
	};

};

export default SourceGroup;