import React, { Component } from "react";
import "./SetCreator.css";

import axios from 'axios';

class SetCreator extends Component {

	state = {
		scrubbedCardList: [],
		outputText: `export default { setInfo: { name: "`,
		set: "",
		basics: ["Plains", "Island", "Swamp", "Mountain", "Forest"],
	}

	// Initiate 'generate top half' (main function)
	submitForm = () => {
		const inputVal = document.getElementById("input");
		const setVal = document.getElementById("set");
		if (setVal.length > 5) {
			this.setState({ 
				set: setVal, 
				basics: ["Plains", "Island", "Swamp", "Mountain", "Forest"],
				outputText: `export default { setInfo: { name: "`,
			 });
		} else {
			this.setState({ 
				set: "", 
				basics: ["Plains", "Island", "Swamp", "Mountain", "Forest"],
				outputText: `export default { setInfo: { name: "`,
			 });
		}
		this.setInfo(inputVal.value);
	}

	// Initiate card search scripts
	cardSearch = () => {
		const inputVal = document.getElementById("input");
		const setVal = document.getElementById("set");
		if (setVal.length > 5) {
			this.setState({ 
				set: setVal, 
				basics: [],
				outputText: "",
			});
		} else {
			this.setState({ 
				set: "", 
				basics: [],
				outputText: "",
			});
		}
		this.prepCardList(inputVal.value, false);
	}

	// Initiate NBL scripts
	generateNBL = () => {
		const inputVal = document.getElementById("input");
		const setVal = document.getElementById("set");
		if (setVal.length > 5) {
			this.setState({ 
				set: setVal, 
				basics: [],
				outputText: "",
			});
		} else {
			this.setState({ 
				set: "", 
				basics: [],
				outputText: "",
			});
		}
		this.prepCardList(inputVal.value, true);
	}

	// Uses top two input to apply set info
	setInfo = (input) => {
		const setName = document.getElementById("setName");
		if (setName.value != null) {
			this.setState({ outputText: this.state.outputText += `${setName.value}", code: "` });
		}

		const setCode = document.getElementById("setCode");
		if (setCode.value != null) {
			this.setState({ outputText: this.state.outputText += `${setCode.value}"}, cards: [` });
		}

		this.prepCardList(input, false);
	}
	
	// Preps input from the card textarea and scrubz it
	prepCardList = (input, isNBL) => {
		// Split and scrub the list
		const cardList = input.split("@");
		const scrubbedList = cardList.map(str => 
			str.replace(/\s/g, "+")
			   .replace("'", "")
			   .replace("-", "")
			   .replace(":", ""));

		// Start the API loop
		this.setState({ scrubbedCardList: scrubbedList });
		console.log(isNBL)
		if (isNBL) {
			console.log("this state NBL: " + this.state.scrubbedCardList )
			this.startNBLAPILoop();
		} else {
			console.log("this state NOT NBL: " + this.state.scrubbedCardList )
			this.startAPILoop();
		}
	}

	// Start api loop
	startAPILoop = () => {
		const apiLoop = setInterval(() => {
			if (this.state.scrubbedCardList.length > 0) {
				// Setup api call
				const set = this.state.set;
				const name = this.state.scrubbedCardList[0];
				const apiCall = `https://api.scryfall.com/cards/named?fuzzy=${name}${set}`;

				// API call
				axios.get(apiCall).then(res => {
					const data = res.data;
					console.log(data);

					const name = data.name;
					const cmc = data.cmc;
					
					// Color 
					let color = 1;
					// w=1, u=2, b=3, r=4, g=5, c=6, m=7
					if (data.colors.length == 0) {
						color = 6;
					} else if (data.colors.length > 1) {
						color = 7;
					} else if (data.colors.length == 1) {
						switch (data.colors[0]) {
							case "W":
								color = 1;
								break;
							case "U":
								color = 2;
								break;
							case "B":
								color = 3;
								break;
							case "R":
								color = 4;
								break;
							case "G":
								color = 5;
								break;
							default:
								break;
						}
					}

					// Image uri
					const imageUrl = data.image_uris.large.match(/(?<=front\/).+/g)[0].replace(/\.jpg?.*/g, "");

					// Cost
					const costArr = data.mana_cost.replace(/[\{\}]/g, "").split("").reverse();
					let costStr = "[";
					costArr.forEach(val => {
						if (val === "W" || val === "U" || val === "B" || val === "R" || val === "G") {
							const lowercaseVal = val.toLowerCase();
							costStr += `"${lowercaseVal}", `;
						} else {
							const numColorless = parseInt(val);
							for (let i = 0; i < numColorless; i++) {
								costStr += `"1", `;
							}
						}
					});
					costStr += "]";

					// ===== CREATE OBJ
					const cardObject = `{ name: "${name}", cost: [${costStr}], imageUrl: "${imageUrl}", cmc: ${cmc}, color: ${color}, sev: XX, pump: 0, counterspell: 0, removal: 0 },`;

					// Output text
					this.setState({ outputText: this.state.outputText += cardObject });
				});

				// Remove the card from the state
				this.setState({ scrubbedCardList: [...this.state.scrubbedCardList.slice(1, this.state.scrubbedCardList.length)]})
			} else {
				// Out of cards? Clear loop
				clearInterval(apiLoop);
				this.startBasicLandAPILoop();
			}
		}, 1000);
	}

	// Start non basic land loop
	startNBLAPILoop = () => {
		// Setup title
		const nblTitle = document.getElementById("nblTitle");
		this.setState({ outputText: `${nblTitle.value}: [` });

		const nblAPILoop = setInterval(() => {
			if (this.state.scrubbedCardList.length > 0) {
				// Setup api call
				const set = this.state.set;
				const name = this.state.scrubbedCardList[0];
				const apiCall = `https://api.scryfall.com/cards/named?fuzzy=${name}${set}`;

				// API call
				axios.get(apiCall).then(res => {
					const data = res.data;
					console.log(data);

					// Mana logic
					let mana = "";
					data.color_identity.forEach(letter => {
						mana += letter.toLowerCase();
					});

					const name = data.name;
					const perms = mana.length;
					const imageUrl = data.image_uris.large.match(/(?<=front\/).+/g)[0].replace(/\.jpg?.*/g, "");

					// Create obj
					const nblObject = `{ name: "${name}", mana: "${mana}", perms: ${perms}, imageUrl: "${imageUrl}" },`;

					// Output text
					this.setState({ outputText: this.state.outputText += nblObject });
				});

				// Remove the card from the state
				this.setState({ scrubbedCardList: [...this.state.scrubbedCardList.slice(1, this.state.scrubbedCardList.length)]})
			} else {
				// Out of cards? Clear loop
				this.setState({ outputText: this.state.outputText += "]," });
				clearInterval(nblAPILoop);
				this.printToOutput();
			}
		}, 1000);
	}

	// Start basic land api loop
	startBasicLandAPILoop = () => {
		// Bad logic to determine if we should do lands (for card search)
		if (this.state.basics.length === 0) {
			this.printToOutput();
			return;
		}

		// Basic lands basic text
		const basicLandStart = `	],	sources: {	Basic$Lands: [`;
		this.setState({ outputText: this.state.outputText += basicLandStart });

		// Interval
		const basicLandApiLoop = setInterval(() => {
			if (this.state.basics.length > 0) {
				const set = this.state.set;
				const name = this.state.basics[0];
				const apiCall = `https://api.scryfall.com/cards/named?fuzzy=${name}${set}`;

				// API
				axios.get(apiCall).then(res => {
					const data = res.data;
					console.log(data);

					const name = data.name;
					const letterUpper = data.produced_mana[0];
					const letterLower = letterUpper.toLowerCase();
					const imageUrl = data.image_uris.large.match(/(?<=front\/).+/g)[0].replace(/\.jpg?.*/g, "");

					// Hex color logic
					let hexColor = "";
					switch (data.name) {
						case "Plains":
							hexColor = "ffeea9";
							break;
						case "Island":
							hexColor = "82deff";
							break;
						case "Swamp":
							hexColor = "ff9ef4";
							break;
						case "Mountain":
							hexColor = "ff796a";
							break;
						case "Forest":
							hexColor = "89ff77";
							break;
						default:
							break;
					}

					// Create obj
					const cardObject = `{ name: "${name}", mana: "${letterLower}", perms: 1, imageUrl: "${imageUrl}", iconColor: "#${hexColor}", manaSymbol: "./assets/${letterUpper}.svg" },`;

					// Output text
					this.setState({ outputText: this.state.outputText += cardObject });
				})

				// Remove the card from the state
				this.setState({ basics: [...this.state.basics.slice(1, this.state.basics.length)]})
			} else {
				this.setState({ outputText: this.state.outputText += "]," });
				clearInterval(basicLandApiLoop);
				this.printToOutput();
			}
		}, 1000)
	}
	
	// Print whatever text to output
	printToOutput = () => {
		const elem = document.querySelector('#output');
		elem.innerHTML = `${this.state.outputText}`;
	}

	// RENDER
	render() {
		return (
			<div className="flex-full flex-row creator-screen">
				<div className="flex-full flex-col creator-input-container">
					<textarea id="setName" name="setName" className="creator-input mb1" rows="1" placeholder="full set name (top)"/>
					<textarea id="setCode" name="setCode" className="creator-input mb1" rows="1" placeholder="set code (top)"/>
					<textarea id="set" name="set" className="creator-input mb1" rows="1" placeholder="&set= (set code for art search)"/>

					<textarea id="input" name="input" className="creator-input" rows="25" placeholder="card list separated by @" />

					<textarea id="nblTitle" name="nblTitle" className="creator-input mt1" rows="1" placeholder="Nbl$Title (nbl naming)"/>

					<button className="creator-submit" onClick={this.submitForm}>Generate top half</button>
					<button className="creator-submit" onClick={this.cardSearch}>Card search</button>
					<button className="creator-submit" onClick={this.generateNBL}>Generate NBL</button>
				</div>

				<p id="output" className="creator-output">
				
				</p>
			</div>
		);
	};

};

export default SetCreator;