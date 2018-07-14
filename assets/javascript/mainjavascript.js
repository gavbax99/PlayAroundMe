//LEFT OFF: for some fucking reason now things wont load or initialize.variables are undefined upon resolution of the page.


var x = 0; // Used as the main "cards" index
var isCalc = false; // isCalc becomes true after you hit the calculate button (it turns off the functionality until reset)


// Basic lands
var pp = ["W", "W", "W", "W", "W"];
var ii = ["U", "U", "U", "U", "U"];
var ss = ["B", "B", "B", "B", "B"];
var mm = ["R", "R", "R", "R", "R"];
var ff = ["G", "G", "G", "G", "G"];


// Green two drop that makes G
var dotc = ["G", "G", "G", "G", "G"];


// Uncommn dual lands
var cb = ["B", "R", "R", "R", "R"];
var fs = ["W", "B", "B", "B", "B"];
var fo = ["B", "G", "G", "G", "G"];
var hl = ["U", "R", "R", "R", "R"];
var mr = ["W", "U", "U", "U", "U"];
var sq = ["R", "W", "W", "W", "W"];
var sb = ["U", "B", "B", "B", "B"];
var tg = ["R", "G", "G", "G", "G"];
var te = ["G", "W", "W", "W", "W"];
var ws = ["G", "U", "U", "U", "U"];


// Colorless lands
var rtower = ["1", "1", "1", "1", "1"];
var dtower = ["1", "1", "1", "1", "1"];


// 5 color producers
var rspire = ["W", "U", "B", "R", "G"];
var mlith = ["W", "U", "B", "R", "G"];
var dhoard = ["W", "U", "B", "R", "G"];
var ddisciple = ["W", "U", "B", "R", "G"];

// Weird producers
var celemental = [["R", "R", "R", "R", "R"], ["R", "R", "R", "R", "R"]];
var gift = [["W", "U", "B", "R", "G"], ["W", "U", "B", "R", "G"]];


// 'lands' is used to check, 'landsH' stores initial values for reload
var lands = [];
var landsH = [];


// 'permutationX' is used to check, 'permutationXH' stores initial values for reload - these are the 5 possible mana combinations the player could have
var permutation1 = [];
var permutation2 = [];
var permutation3 = [];
var permutation4 = [];
var permutation5 = [];
var permutation1H = [];
var permutation2H = [];
var permutation3H = [];
var permutation4H = [];
var permutation5H = [];
//needs 10 perms for multiple duals- when a player has 2 WUBRG lands, there's 10 permutations of pairs. currently outputs [W,U,B,R,G]x2


// Array list of cards - 'cards.cost' is used to check, 'cards.costH' stores initial values for reload/reference
var cards = [
    { name: "Aegis of the Heavens", cost: ["W", "1"], costH: ["W", "1"], cono: "1", url: "" },
    { name: "Inspired Charge", cost: ["W", "W", "1", "1"], costH: ["W", "W", "1", "1"], cono: "15", url: "" },
    { name: "Invoke the Divine", cost: ["W", "1", "1"], costH: ["W", "1", "1"], cono: "16", url: "" },
    { name: "Isolate", cost: ["W"], costH: ["W"], cono: "17", url: "" },
    { name: "Make a Stand", cost: ["W", "1", "1"], costH: ["W", "1", "1"], cono: "26", url: "" },
    { name: "Mighty", cost: ["W", "1"], costH: ["W", "1"], cono: "28", url: "" },
    { name: "Revitalize", cost: ["W", "1"], costH: ["W", "1"], cono: "35", url: "" },
    { name: "Anticipate", cost: ["U", "1"], costH: ["U", "1"], cono: "44", url: "" },
    { name: "Bone to Ash", cost: ["U", "U", "1", "1"], costH: ["U", "U", "1", "1"], cono: "47", url: "" },
    { name: "Cancel", cost: ["U", "U", "1"], costH: ["U", "U", "1"], cono: "48", url: "" },
    { name: "Disperse", cost: ["U", "1"], costH: ["U", "1"], cono: "50", url: "" },
    { name: "Essence Sactter", cost: ["U", "1"], costH: ["U", "1"], cono: "54", url: "" },
    { name: "Totally Lost", cost: ["U", "1", "1", "1", "1"], costH: ["U", "1", "1", "1", "1"], cono: "81", url: "" },
    { name: "Uncomfortable Chill", cost: ["U", "1", "1"], costH: ["U", "1", "1"], cono: "82", url: "" },
    { name: "Abnormal Endurance", cost: ["B", "1"], costH: ["B", "1"], cono: "85", url: "" },
    { name: "Infernal Reckoning", cost: ["B"], costH: ["B"], cono: "102", url: "" },
    { name: "Murder", cost: ["B", "B", "1"], costH: ["B", "B", "1"], cono: "110", url: "" },
    { name: "Nightmare's Thirst", cost: ["B"], costH: ["B"], cono: "111", url: "" },
    { name: "Strangling Spores", cost: ["B", "1", "1", "1"], costH: ["B", "1", "1", "1"], cono: "122", url: "" },
    { name: "Electrify", cost: ["R", "1", "1", "1"], costH: ["R", "1", "1", "1"], cono: "139", url: "" },
    { name: "Lightning Strike", cost: ["R", "1"], costH: ["R", "1"], cono: "152", url: "" },
    { name: "Shock", cost: ["R"], costH: ["R"], cono: "156", url: "" },
    { name: "Smelt", cost: ["R"], costH: ["R"], cono: "158", url: "" },
    { name: "Spit Flame", cost: ["R", "1", "1"], costH: ["R", "1", "1"], cono: "160", url: "" },
    { name: "Sure Strike", cost: ["R", "1"], costH: ["R", "1"], cono: "161", url: "" },
    { name: "Trumpet Blast", cost: ["R", "1", "1"], costH: ["R", "1", "1"], cono: "165", url: "" },
    { name: "Naturalize", cost: ["G", "1"], costH: ["G", "1"], cono: "190", url: "" },
    { name: "Plummet", cost: ["G", "1"], costH: ["G", "1"], cono: "193", url: "" },
    { name: "Root Snare", cost: ["G", "1"], costH: ["G", "1"], cono: "199", url: "" },
    { name: "Chromium, the Mutable", cost: ["W", "U", "B", "1", "1", "1", "1"], costH: ["W", "U", "B", "1", "1", "1", "1"], cono: "214", url: "" }
];
var cardsOneH = [
    { name: "Aegis of the Heavens", cost: ["W", "1"], costH: ["W", "1"], cono: "1", url: "" },
    { name: "Inspired Charge", cost: ["W", "W", "1", "1"], costH: ["W", "W", "1", "1"], cono: "15", url: "" },
    { name: "Invoke the Divine", cost: ["W", "1", "1"], costH: ["W", "1", "1"], cono: "16", url: "" },
    { name: "Isolate", cost: ["W"], costH: ["W"], cono: "17", url: "" },
    { name: "Make a Stand", cost: ["W", "1", "1"], costH: ["W", "1", "1"], cono: "26", url: "" },
    { name: "Mighty", cost: ["W", "1"], costH: ["W", "1"], cono: "28", url: "" },
    { name: "Revitalize", cost: ["W", "1"], costH: ["W", "1"], cono: "35", url: "" },
    { name: "Anticipate", cost: ["U", "1"], costH: ["U", "1"], cono: "44", url: "" },
    { name: "Bone to Ash", cost: ["U", "U", "1", "1"], costH: ["U", "U", "1", "1"], cono: "47", url: "https://magiccards.info/scans/en/ori/47.jpg" },
    { name: "Cancel", cost: ["U", "U", "1"], costH: ["U", "U", "1"], cono: "48", url: "" },
    { name: "Disperse", cost: ["U", "1"], costH: ["U", "1"], cono: "50", url: "" },
    { name: "Essence Sactter", cost: ["U", "1"], costH: ["U", "1"], cono: "54", url: "" },
    { name: "Totally Lost", cost: ["U", "1", "1", "1", "1"], costH: ["U", "1", "1", "1", "1"], cono: "81", url: "" },
    { name: "Uncomfortable Chill", cost: ["U", "1", "1"], costH: ["U", "1", "1"], cono: "82", url: "" },
    { name: "Abnormal Endurance", cost: ["B", "1"], costH: ["B", "1"], cono: "85", url: "" },
    { name: "Infernal Reckoning", cost: ["B"], costH: ["B"], cono: "102", url: "" },
    { name: "Murder", cost: ["B", "B", "1"], costH: ["B", "B", "1"], cono: "110", url: "https://magiccards.info/scans/en/a25/98.jpg" },
    { name: "Nightmare's Thirst", cost: ["B"], costH: ["B"], cono: "111", url: "" },
    { name: "Strangling Spores", cost: ["B", "1", "1", "1"], costH: ["B", "1", "1", "1"], cono: "122", url: "" },
    { name: "Electrify", cost: ["R", "1", "1", "1"], costH: ["R", "1", "1", "1"], cono: "139", url: "" },
    { name: "Lightning Strike", cost: ["R", "1"], costH: ["R", "1"], cono: "152", url: "https://magiccards.info/scans/en/xln/149.jpg" },
    { name: "Shock", cost: ["R"], costH: ["R"], cono: "156", url: "" },
    { name: "Smelt", cost: ["R"], costH: ["R"], cono: "158", url: "" },
    { name: "Spit Flame", cost: ["R", "1", "1"], costH: ["R", "1", "1"], cono: "160", url: "" },
    { name: "Sure Strike", cost: ["R", "1"], costH: ["R", "1"], cono: "161", url: "" },
    { name: "Trumpet Blast", cost: ["R", "1", "1"], costH: ["R", "1", "1"], cono: "165", url: "" },
    { name: "Naturalize", cost: ["G", "1"], costH: ["G", "1"], cono: "190", url: "" },
    { name: "Plummet", cost: ["G", "1"], costH: ["G", "1"], cono: "193", url: "" },
    { name: "Root Snare", cost: ["G", "1"], costH: ["G", "1"], cono: "199", url: "" },
    { name: "Chromium, the Mutable", cost: ["W", "U", "B", "1", "1", "1", "1"], costH: ["W", "U", "B", "1", "1", "1", "1"], cono: "214", url: "" }
];


var nonBasicTypeArray = [
    { name: "Cinder Barrens", c1: "b", c1h: "#FF9EF4", c2: "r", c2h: "#FF796A", cono: "248" },
    { name: "Forsaken Sanctuary", c1: "w", c1h: "#FFEEA9", c2: "b", c2h: "#FF9EF4", cono: "250" },
    { name: "Foul Orchard", c1: "b", c1h: "#FF9EF4", c2: "g", c2h: "#89FF77", cono: "251" },
    { name: "Highland Lake", c1: "u", c1h: "#82DEFF", c2: "r", c2h: "#FF796A", cono: "252" },
    { name: "Meandering River", c1: "w", c1h: "#FFEEA9", c2: "u", c2h: "#82DEFF", cono: "253" },
    { name: "Stone Quarry", c1: "r", c1h: "#FF796A", c2: "w", c2h: "#FFEEA9", cono: "256" },
    { name: "Submerged Boneyard", c1: "u", c1h: "#82DEFF", c2: "b", c2h: "#FF9EF4", cono: "257" },
    { name: "Timber Gorge", c1: "r", c1h: "#FF796A", c2: "g", c2h: "#89FF77", cono: "258" },
    { name: "Tranquil Expanse", c1: "g", c1h: "#89FF77", c2: "w", c2h: "#FFEEA9", cono: "259" },
    { name: "Woodland Stream", c1: "g", c1h: "#89FF77", c2: "u", c2h: "#82DEFF", cono: "260" }
];

var fiveColorArray = [
    { name: "Rupture Spire", c1: "w", c1h: "#FFEEA9", c2: "u", c2h: "#82DEFF", c3: "b", c3h: "#FF9EF4", c4: "r", c4h: "#FF796A", c5: "r", c5h: "#FF796A", cono: "255" },
    { name: "Manalith", c1: "w", c1h: "#FFEEA9", c2: "u", c2h: "#82DEFF", c3: "b", c3h: "#FF9EF4", c4: "r", c4h: "#FF796A", c5: "r", c5h: "#FF796A", cono: "239" },
    { name: "Dragon's Hoard", c1: "w", c1h: "#FFEEA9", c2: "u", c2h: "#82DEFF", c3: "b", c3h: "#FF9EF4", c4: "r", c4h: "#FF796A", c5: "r", c5h: "#FF796A", cono: "232" },
    { name: "Draconic Disciple", c1: "w", c1h: "#FFEEA9", c2: "u", c2h: "#82DEFF", c3: "b", c3h: "#FF9EF4", c4: "r", c4h: "#FF796A", c5: "r", c5h: "#FF796A", cono: "215" },
    { name: "Gift of Paradise", c1: "w", c1h: "#FFEEA9", c2: "u", c2h: "#82DEFF", c3: "b", c3h: "#FF9EF4", c4: "r", c4h: "#FF796A", c5: "r", c5h: "#FF796A", cono: "184" },
];


var typeArray = [
    ["plains", "p", "w"],
    ["island", "i", "u"],
    ["swamp", "s", "b"],
    ["mountain", "m", "r"],
    ["forest", "f", "g"]
];

var nonLandsArray = [
    { name: "Reliquary Tower", cono: "254" },
    { name: "Detection Tower", cono: "249" },
    { name: "Druid of the Cowl", cono: "177" },
    { name: "Cataclyst Elemental", cono: "132" }
];

// Colorless lands
var rtower = ["1", "1", "1", "1", "1"];
var dtower = ["1", "1", "1", "1", "1"];

// Weird producers
var celemental = [["R", "R", "R", "R", "R"], ["R", "R", "R", "R", "R"]];



// When the document is loaded
$(document).ready(function () {


    // outside() is the function that says: for every possible card, check each permutation of mana (checkP1-5) the player could have
    function outside() {
        for (k = 0; k < cards.length; k++) {
            
            var isAlreadyPayedFor = 0;
            if (checkP1() && isAlreadyPayedFor == 0) { // If any of the checks come back true, it means the player can afford the card
                $("#calc-card-pool").append('<img class="cardPic" src="https://img.scryfall.com/cards/large/en/m19/' + cards[x].cono + '.jpg" width="120">'); // So append that card to the results
                isAlreadyPayedFor = 1;
            };
            permutation1 = permutation1H.slice(); // Reset mana in permutationX
            cards[x].cost = cards[x].costH.slice(); // Reset cards[x].cost
            if (checkP2() && isAlreadyPayedFor == 0) { // If any of the checks come back true, it means the player can afford the card
                $("#calc-card-pool").append('<img class="cardPic" src="https://img.scryfall.com/cards/large/en/m19/' + cards[x].cono + '.jpg" width="120">'); // So append that card to the results
                isAlreadyPayedFor = 1;
            };
            permutation2 = permutation2H.slice(); // Reset mana in permutationX
            cards[x].cost = cards[x].costH.slice(); // Reset cards[x].cost
            if (checkP3() && isAlreadyPayedFor == 0) { // If any of the checks come back true, it means the player can afford the card
                $("#calc-card-pool").append('<img class="cardPic" src="https://img.scryfall.com/cards/large/en/m19/' + cards[x].cono + '.jpg" width="120">'); // So append that card to the results
                isAlreadyPayedFor = 1;
            };
            permutation3 = permutation3H.slice(); // Reset mana in permutationX
            cards[x].cost = cards[x].costH.slice(); // Reset cards[x].cost
            if (checkP4() && isAlreadyPayedFor == 0) { // If any of the checks come back true, it means the player can afford the card
                $("#calc-card-pool").append('<img class="cardPic" src="https://img.scryfall.com/cards/large/en/m19/' + cards[x].cono + '.jpg" width="120">'); // So append that card to the results
                isAlreadyPayedFor = 1;
            };
            permutation4 = permutation4H.slice(); // Reset mana in permutationX
            cards[x].cost = cards[x].costH.slice(); // Reset cards[x].cost
            if (checkP5() && isAlreadyPayedFor == 0) { // If any of the checks come back true, it means the player can afford the card
                $("#calc-card-pool").append('<img class="cardPic" src="https://img.scryfall.com/cards/large/en/m19/' + cards[x].cono + '.jpg" width="120">'); // So append that card to the results
                isAlreadyPayedFor = 1;
            };
            permutation5 = permutation5H.slice(); // Reset mana in permutationX
            cards[x].cost = cards[x].costH.slice(); // Reset cards[x].cost

            x++; // Incrament x, our main "cards" index
        }
    }

    // These are the functions that check each permutation of mana against the card cost.
    // checkP1 checks against permutation1, checkP2 checks against permutation2, ...
    function checkP1() {
        for (n = 0; n < cards[x].costH.length; n++) {

            var inc = permutation1.includes(cards[x].costH[n]); // Does permutationX include the mana in question? T/F
            var splP = permutation1.indexOf(cards[x].costH[n]); // If so, what is its index #?
            var splC = cards[x].cost.indexOf(permutation1[splP]); // And whatever is in that slot, find that value's index number inside the prototypeX array (for later splicing purposes)

            if (cards[x].costH[n] == "1") { // If the mana being checked is "1", or colorless, do nothing (keep in permutationX for a later check)
            } else { // If the mana being checked is colored:
                if (inc == true) { // If the mana being checked is in permutationX, meaning the player has the right resource
                    permutation1.splice(splP, 1); // Remove it from permutationX
                    cards[x].cost.splice(splC, 1); // Remove it from cards[x].cost (mana cost)

                } else { // Otherwise they don't have the required mana
                    return false; // permutationX has failed to pay for the cost
                }
            }
        }

        // If you've made it this far, all colored mana has been accounted for and only "1", or generic mana, remain
        if (cards[x].cost.length > permutation1.length) { // If the remaining cards[x].cost (mana cost) is greater than what the player has
            return false; // Not enough generic mana, permutationX has failed to pay for the cost
        } else {
            return true; // Success! Colored mana accounted for and enough left over to pay for the generic mana
        }
    }

    function checkP2() {
        for (n = 0; n < cards[x].costH.length; n++) {

            var inc = permutation2.includes(cards[x].costH[n]);
            var splP = permutation2.indexOf(cards[x].costH[n]);
            var splC = cards[x].cost.indexOf(permutation2[splP]);

            if (cards[x].costH[n] == "1") {
            } else {
                if (inc == true) {
                    permutation2.splice(splP, 1);
                    cards[x].cost.splice(splC, 1);
                } else {
                    return false;
                }
            }
        }

        if (cards[x].cost.length > permutation2.length) {
            return false;
        } else {
            return true;
        }
    }

    function checkP3() {
        for (n = 0; n < cards[x].costH.length; n++) {

            var inc = permutation3.includes(cards[x].costH[n]);
            var splP = permutation3.indexOf(cards[x].costH[n]);
            var splC = cards[x].cost.indexOf(permutation3[splP]);

            if (cards[x].costH[n] == "1") {
            } else {
                if (inc == true) {
                    permutation3.splice(splP, 1);
                    cards[x].cost.splice(splC, 1);
                } else {
                    return false;
                }
            }
        }

        if (cards[x].cost.length > permutation3.length) {
            return false;
        } else {
            return true;
        }
    }

    function checkP4() {
        for (n = 0; n < cards[x].costH.length; n++) {

            var inc = permutation4.includes(cards[x].costH[n]);
            var splP = permutation4.indexOf(cards[x].costH[n]);
            var splC = cards[x].cost.indexOf(permutation4[splP]);

            if (cards[x].costH[n] == "1") {
            } else {
                if (inc == true) {
                    permutation4.splice(splP, 1);
                    cards[x].cost.splice(splC, 1);
                } else {
                    return false;
                }
            }
        }

        if (cards[x].cost.length > permutation4.length) {
            return false;
        } else {
            return true;
        }
    }

    function checkP5() {
        for (n = 0; n < cards[x].costH.length; n++) {

            var inc = permutation5.includes(cards[x].costH[n]);
            var splP = permutation5.indexOf(cards[x].costH[n]);
            var splC = cards[x].cost.indexOf(permutation5[splP]);

            if (cards[x].costH[n] == "1") {
            } else {
                if (inc == true) {
                    permutation5.splice(splP, 1);
                    cards[x].cost.splice(splC, 1);
                } else {
                    return false;
                }
            }
        }

        if (cards[x].cost.length > permutation5.length) {
            return false;
        } else {
            return true;
        }
    }


    function initNonLands() {
        for (i = 0; i < nonLandsArray.length; i++) {
            var creButton = $("<button>");
            creButton.attr("style", "background-image: url(https://img.scryfall.com/cards/large/en/m19/" + nonLandsArray[i].cono + ".jpg)");
            creButton.addClass("mana-nbl-button");
            creButton.text(nonLandsArray[i].name)
            $("#mana-tiles").append(creButton);
        }
    }

    function initFiveColor() {
        for (i = 0; i < fiveColorArray.length; i++) {
            var creButton = $("<button>");
            creButton.attr("style", "background-image: url(https://img.scryfall.com/cards/large/en/m19/" + fiveColorArray[i].cono + ".jpg)");
            creButton.attr("name", nonBasicTypeArray[i].name);
            creButton.addClass("mana-nbl-button");
            creButton.text(fiveColorArray[i].name)
            $("#mana-tiles").append(creButton);
        }
    }

    function initNBLButons() {
        for (i = 0; i < nonBasicTypeArray.length; i++) {
            var creButton = $("<button>");
            creButton.text(nonBasicTypeArray[i].name);
            creButton.attr("style", "background-image: url(https://img.scryfall.com/cards/large/en/m19/" + nonBasicTypeArray[i].cono + ".jpg)");
            creButton.attr("name", nonBasicTypeArray[i].name);
            creButton.addClass("mana-nbl-button");
            $("#mana-tiles").append(creButton);
        }
    }

    function initButtons() {
        for (i = 0; i < typeArray.length; i++) {
            
            var creButton = $("<button>");
            creButton.addClass("mana-basic-button").addClass("basic").addClass(typeArray[i][0]).addClass("clearfix");
            creButton.attr("style", "box-sizing: border-box;");
            creButton.attr("name", typeArray[i][0]);
            creButton.attr("value", typeArray[i][1]);
            creButton.html("<i class='ms ms-" + typeArray[i][2] + "'>")
            $("#mana-tiles").append(creButton);
        }
    }

    $("#mana-tiles").append("<p class='buttonLabels'>Basics</p>");
    initButtons();
    $("#mana-tiles").append("<br><br><br><br><p class='buttonLabels'>Dual Lands</p>");
    initNBLButons();
    $("#mana-tiles").append("<br><br><br><br><div class='buttonLabels'>5 Color Sources</div>");
    initFiveColor()
    $("#mana-tiles").append("<br><br><p class='buttonLabels'>Other Stuff</p>");
    initNonLands();

    // Click event for basic lands
    $(".basic").on("click", function () {
       
        if (isCalc == false) {
            // Adds picture of the corresponding land to the on-screen mana pool
            var pushSRC = "assets/images/" + $(this).attr("name") + ".jpg"
            var pushLand = $("<img>")
            pushLand.addClass("landRenderedImg");
            pushLand.attr("src", pushSRC)
            pushLand.attr("height", "86")
            $("#internal-land-container").append(pushLand);

            // Which basic land was pressed?
            if ($(this).attr("value") == "p") {
                // Push the coresponding color into the "lands" and "landsH" arrays
                lands.push(pp);
                landsH.push(pp);
            }

            if ($(this).attr("value") == "i") {
                lands.push(ii);
                landsH.push(ii);
            }

            if ($(this).attr("value") == "s") {
                lands.push(ss);
                landsH.push(ss);
            }

            if ($(this).attr("value") == "m") {
                lands.push(mm);
                landsH.push(mm);
            }

            if ($(this).attr("value") == "f") {
                lands.push(ff);
                landsH.push(ff);
            }

            console.log(lands);
            console.log(landsH);
        }

    });


    // Nonbasic lands will go here ----
    $(".cb").on("click", function () {

        $("#internal-land-container").append("CB");

        lands.push(cb);
        landsH.push(cb);

    });
    // --------------------------------


    // Click event for the calculate button
    $("#calc-button").on("click", function () {

        // Turns off the functionality of the buttons until reset
        isCalc = true;

        // For each land chosen, create the 5 possible permutations those lands could produce
        for (z = 0; z < lands.length; z++) {
            permutation1.push(lands[z][0]);
            permutation2.push(lands[z][1]);
            permutation3.push(lands[z][2]);
            permutation4.push(lands[z][3]);
            permutation5.push(lands[z][4]);
            permutation1H.push(lands[z][0]);
            permutation2H.push(lands[z][1]);
            permutation3H.push(lands[z][2]);
            permutation4H.push(lands[z][3]);
            permutation5H.push(lands[z][4]);
        }

        // Then run the "outside();" function, where most of our processing is done
        outside();


    });


    // On click event for the reset button
    $("#reset-button").on("click", function () {

        // Sets lands and permutations to their origial empty value; resets cards[x].cost; empties the screen
        lands = [];
        landsH = [];
        x = 0;
        permutation1 = [];
        permutation2 = [];
        permutation3 = [];
        permutation4 = [];
        permutation5 = [];
        permutation1H = [];
        permutation2H = [];
        permutation3H = [];
        permutation4H = [];
        permutation5H = [];
        isCalc = false;
        cards = cardsOneH;
        $("#internal-land-container").empty();
        $("#calc-card-pool").empty();


    });



});