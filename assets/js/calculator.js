$(document).ready(function () {


	// Updating set info
	// ===============================================
	let setImg = $("<img>");
	setImg.attr("src", (setInfo.setInfo[0]));
	setImg.attr("width", "44");
	$(".title-container").append(setImg);

	// set background image
	$("body").css("background-image", `url(${setInfo.setInfo[1]})`)

	// set card list
	const cards = setInfo.cards;
	// ===============================================


	// creating front end 
	// ===============================================
	const scryfall = "https://img.scryfall.com/cards/large/front/";
	let landButtonContainer = $(".lands");

	setInfo.landOrder.forEach(str => {
		// building taglines
		if (str.includes("-tagline")) {
			let newTagline = $("<p>");
			newTagline.addClass("tagline");
			newTagline.text(str.replace("-tagline", ""));
			landButtonContainer.append(newTagline);

			// building basic lands
		} else if (str.includes("regbasics")) {
			let landContainer = $("<div>");
			landContainer.addClass("flex-full flex-row land-container regbasics-container");
			setInfo[str].forEach(basic => {
				let newLand = $("<button>");
				newLand.addClass("flex-full land-button regbasics-button");
				// newLand.text(basic.manaSymbol);
				let landImg = $("<img>");
				landImg.attr("src", basic.manaSymbol);
				landImg.css({ "width": "25px", "box-shadow": "0 0 10px #000", "border-radius": "50%" });
				newLand.append(landImg);

				newLand.attr("mana", basic.mana);
				newLand.attr("image", `${scryfall + basic.imageUrl}.jpg`);

				newLand.attr("style", `background-image: url(${scryfall + basic.imageUrl}.jpg); color: ${basic.iconColor};`);
				landContainer.append(newLand);
			})
			landButtonContainer.append(landContainer);

			//building non-bsaic lands
		} else {
			let landContainer = $("<div>");
			landContainer.addClass(`flex-full flex-row land-container ${str}-container`);
			setInfo[str].forEach(land => {
				let newLand = $("<button>");
				newLand.addClass("flex-full land-button");
				newLand.text(land.name);

				if (land.mana) newLand.attr("mana", land.mana);
				if (land.manarr) newLand.attr("manarr", land.manarr);

				newLand.attr("image", `${scryfall + land.imageUrl}.jpg`);
				newLand.attr("style", `background-image: url(${scryfall + land.imageUrl}.jpg)`);
				landContainer.append(newLand);
			})
			landButtonContainer.append(landContainer);
		}
	});
	// ===============================================


	// pressing land buttons pushes them to sources
	// ===============================================
	$(".land-button").on("click", function () {
		if ($(".sources-container img").length === 7) return;
		let newImg = $("<img>");
		newImg.addClass("source-mana");
		newImg.attr("src", $(this).attr("image"));

		if ($(this).attr("manarr")) newImg.attr("manarr", $(this).attr("manarr"));
		if ($(this).attr("mana")) newImg.attr("mana", $(this).attr("mana"));

		newImg.bind("click", function () {
			$(this).remove();
		});
		$(".sources-container").append(newImg);
	});
	//===============================================


	// building input array from sources (submit buttons)
	// ===============================================
	let inputArr = [];
	$(".submit-button").on("click", function () {
		inputArr = [];
		let sourceMap = document.querySelectorAll(".source-mana");
		sourceMap.forEach(ele => {

			if (typeof ele.attributes.manarr === "object") {
				let arrHold = ele.attributes.manarr.nodeValue.split(",");
				arrHold.forEach(el => inputArr.push(el));
			} else if (typeof ele.attributes.mana.nodeValue === "string") {
				let single = ele.attributes.mana.nodeValue.split("");
				inputArr.push(single);
			}	

		});

		// Call the main calculate function
		calculateCost(inputArr);
	});

	// Clear the calculator
	$(".clear-button").on("click", function () {
		$(".sources-container").empty();
		$(".card-output").empty();
	});
	// ===============================================


	// ================================== output cards function
	const outputCards = cardArray => {
		cardArray.forEach(card => {
			let cardImg = $("<img>");
			cardImg.addClass("output-card");
			cardImg.attr("src", `${scryfall}${card.imageUrl}.jpg`);
			$(".card-output").append(cardImg);
		});
	};
	// ===============================================


	// calculateCost main function
	let payedFor = [];
	// ===============================================
	const calculateCost = inputArr => {
		// clear payedFor
		payedFor = [];
		if (inputArr.length === 1) inputArr = [...inputArr];

		// sort array big to small
		inputArr.sort((a, b) => b.length - a.length);

		// find permutations of array
		const perm = inputArr.reduce((t, val) => t * val.length, 1);
		// build permutations array

		let outputArray = Array(perm).fill([]);

		// number of first repatitions based on first index
		let numHold = perm / inputArr[0].length;

		// iterate through the sources array
		inputArr.forEach((val, i) => {

			// update numhold based on last 
			if (val.length === 1 && numHold === 1) numHold = 0;
			if (i > 0) numHold = 1 / val.length * numHold;

			// pointer for which index to add
			let indexToAdd = 0;

			for (j = 1; j <= perm; j++) {
				// update the array with the index pointer
				outputArray[j - 1] = [...outputArray[j - 1], val[indexToAdd]];

				// update the index pointer based on numhold
				if (numHold != 0 && j % numHold === 0 && indexToAdd != val.length - 1) {
					indexToAdd++;
				} else if (j % numHold === 0 && indexToAdd === val.length - 1 && indexToAdd != 0) {
					indexToAdd = 0;
				}
			}
		});

		// filter the array down to unique values
		const filteredArray = outputArray.map(val => val.sort()).map(JSON.stringify).filter(function (val, i, a) {
			return a.indexOf(val, i + 1) === -1;
		}).map(JSON.parse);
		// ========================================


		// one cost function
		const oneCost = card => {
			for (i = 0; i < card.cost.length; i++) {
				// assign cost of card to array to comapre against
				let costArr = [...card.cost[i]];
				// if this switches to true, we can skip the rest of the check
				let paidForCard = false;

				filteredArray.forEach(singleFilteredArray => {
					if (paidForCard) return;

					// assign mana to array to compare against
					let manaArr = [...singleFilteredArray];

					// for each mana, check if it exists in the card cost. if so, remove those values from their espective arrays
					singleFilteredArray.forEach(mana => {
						const costI = costArr.indexOf(mana);
						if (costI >= 0) {
							costArr.splice(costI, 1);
							manaArr.splice(manaArr.indexOf(mana), 1);
						};
					});

					// after going through your mana, push the card if there are no more colored sources and you have more mana than the remaining generic cost
					if (costArr.join("").search(/\D/) === -1 && manaArr.length >= costArr.length && !paidForCard) {
						payedFor.push(card);
						paidForCard = true;
					} else {
						costArr = [...card.cost[0]];
					}
				});
			};
		};

		// iterate through cards to compare mana to costs
		cards.forEach(card => {
			if (card.cost.length === 1) {
				oneCost(card);
			} else {
				//multCost(card)
			};
		});

		if (payedFor.length > 0) $(".no-cards-yet").remove();

		// function to spit out cards to output
		console.log(payedFor);
		outputCards(payedFor);
	};

	// =================== sort output cards
	$(".color").on("click", function() {		
		payedFor.sort((a, b) => a.color - b.color);
		$(".card-output").empty();
		outputCards(payedFor);
	});

	$(".cmc").on("click", function() {		
		payedFor.sort((a, b) => a.cmc - b.cmc);
		$(".card-output").empty();
		outputCards(payedFor);
	});

	$(".severity").on("click", function() {
		payedFor.sort((a, b) => a.sev - b.sev);
		$(".card-output").empty();
		outputCards(payedFor);
	});

});















//med insurace running out, need note says no longer work there and ins ius running out, proof of loss