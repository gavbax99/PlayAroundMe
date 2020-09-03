// React and CSS
import React, { Component } from "react";
import "./PayedForCard.css";

class PayedForCard extends Component {

	render() {
		const scryfall = "https://img.scryfall.com/cards/normal/front/";

		return (
			<div className="flex-full payed-for-card-container">
				<img 
					className="payed-for-card"
					src={`${scryfall}${this.props.imageUrl}.jpg`}
					alt="Paid for card"/>
			</div>
		);
	};

};

export default PayedForCard;