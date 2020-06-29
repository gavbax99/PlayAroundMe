$(document).ready(function () {


    //Updating set info
    // ===============================================
    let setImg = $("<img>");
    setImg.attr("src", (setInfo.setInfo[0]));
    setImg.attr("width", "44");
    $(".title-container").append(setImg);

    $("body").css("background-image", "url(./assets/sets/bg.jpg)")
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
                let newLand = $("<div>");
                newLand.addClass("flex-full land-button regbasics-button");
                newLand.text(basic.manaSymbol);

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
                let newLand = $("<div>");
                newLand.addClass("flex-full land-button");
                newLand.text(land.name);
                
                newLand.attr("mana", land.mana);
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
        newImg.attr("mana", $(this).attr("mana"));
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
            let single = ele.attributes.mana.nodeValue.split("");
            inputArr.push(single);
        });

        calculateCost(inputArr);
    });

    $(".clear-button").on("click", function () {
        $(".sources-container").empty();
        $(".card-output").empty();
    });
    // ===============================================


    // calculateCost main function
    // ===============================================
    const calculateCost = inputArr => {
        // sort array big to small
        inputArr.sort((a, b) => b.length - a.length);
        // find permutations of array
        const perm = inputArr.reduce((t, val) => t * val.length, 1);
        // build permutations array
        const outputArray = Array(perm).fill([]);

        // number of first repatitions based on first index
        let numHold = perm / inputArr[0].length;
        // iterate through the sources array
        inputArr.forEach((val, i) => {
            // update numhold based on last 
            if (numHold === 1) numHold = 0;
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


        // ************************************
        const cards = [
            { name: "Rookie Mistake", cost: [["u"]] },
            { name: "Goblin Thing", cost: [["r", "r", "g"]] },
        ]
        // *********************************

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

        // cards that have been paid for
        let payedFor = [];

        // iterate through cards to compare mana to costs
        cards.forEach(card => {
            if (card.cost.length === 1) {
                oneCost(card);
            } else {
                //multCost(card)
            };
        });

        console.log(payedFor);
    };

});