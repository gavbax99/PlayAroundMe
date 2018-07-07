//LEFT OFF: for some fucking reason now things wont load or initialize.variables are undefined upon resolution of the page.


var x = 0; // Used as the main "cards" index
var isCalc = false; // isCalc becomes true after you hit the calculate button (it turns off the functionality until reset)


// Basic lands
var p = ["W", "W", "W", "W", "W"];
var i = ["U", "U", "U", "U", "U"];
var s = ["B", "B", "B", "B", "B"];
var m = ["R", "R", "R", "R", "R"];
var f = ["G", "G", "G", "G", "G"];


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


var celemental; //sac RR, needs to be made
var gift; //ench land makes 2 of any color, needs to be made


// 'lands' is used to check, 'landsH' stores initial values for reload
var lands = [];
var landsH = [];


// 'permutationX' is used to check, 'permutationXH' stores initial values for reload - these are the 5 possible mana combinations the player could have
var permutation1 = [];
var permutation2 = [];
var permutation3 = [];
var permutation4 = [];
var permutation5 = [];
var permutationOneH = [];
var permutation2H = [];
var permutation3H = [];
var permutation4H = [];
var permutation5H = [];
//needs 10 perms for multiple duals- when a player has 2 WUBRG lands, there's 10 permutations of pairs. currently outputs [W,U,B,R,G]x2


// Array list of cards - 'cards.cost' is used to check, 'cards.costH' stores initial values for reload/reference
var cards = [
    { name: "Bone to Ash", cost: ["U", "U", "1", "1"], costH: ["U", "U", "1", "1"], cono: "47", url: "https://magiccards.info/scans/en/ori/47.jpg" },
    { name: "Murder", cost: ["B", "B", "1"], costH: ["B", "B", "1"], cono: "110", url: "https://magiccards.info/scans/en/a25/98.jpg" },
    { name: "Lightning Strike", cost: ["R", "1"], costH: ["R", "1"], cono: "152", url: "https://magiccards.info/scans/en/xln/149.jpg" }
];
var cardsOneH = [
    { name: "Bone to Ash", cost: ["U", "U", "1", "1"], costH: ["U", "U", "1", "1"], cono: "47", url: "https://magiccards.info/scans/en/ori/47.jpg" },
    { name: "Murder", cost: ["B", "B", "1"], costH: ["B", "B", "1"], cono: "110", url: "https://magiccards.info/scans/en/a25/98.jpg" },
    { name: "Lightning Strike", cost: ["R", "1"], costH: ["R", "1"], cono: "152", url: "https://magiccards.info/scans/en/xln/149.jpg" }
];

console.log(cards[x].costH.length);

// When the document is loaded
$(document).ready(function () {


    // outside() is the function that says: for every possible card, check each permutation of mana (checkP1-5) the player could have
    function outside() {
        for (k = 0; k < cards.length; k++) {
            // checkP1();
            // checkP2();
            // checkP3();
            // checkP4();
            // checkP5();
            // || checkP2() || checkP3() || checkP4() || checkP5()
            if (checkP1()) { // If any of the checks come back true, it means the player can afford the card
                $("#calc-card-pool").append('<img class="cardPic" src="' + cards[x].url + '" width="100">'); // So append that card to the results
            };
            debugger;
            console.log(x);
            console.log(k);
            console.log(cards[x].cost);
            console.log(cards[x].costH);
            console.log(permutation1);
            console.log(permutationOneH);
            x++; // Incrament x, our main "cards" index
        }
    }


    // These are the functions that check each permutation of mana against the card cost.
    // checkP1 checks against permutation1, checkP2 checks against permutation2, ...
    function checkP1() {
        for (n = 0; n < cards[x].costH.length; n++) {

            console.log("lngth = " + cards[x].cost.length);

            var inc = permutation1.includes(cards[x].costH[n]); // Does permutationX include the mana in question? T/F
            var splP = permutation1.indexOf(cards[x].costH[n]); // If so, what is its index #?
            var splC = cards[x].cost.indexOf(permutation1[splP]); // And whatever is in that slot, find where it resides inside the prototypeX array (index #) followed from line 118
debugger;

            console.log(x);
            console.log(k);
            console.log(cards[x].cost);
            console.log(cards[x].costH);
            console.log(permutation1);
            console.log(permutationOneH);

            if (cards[x].costH[n] == "1") { // If the mana being checked is "1", or colorless, do nothing (keep in permutationX)
                // console.log("colorless found");
            } else { // If the mana being checked is colored:
                if (inc == true) { // If the mana being checked is in permutationX, meaning the player has the right resource
                    permutation1.splice(splP, 1); // Remove it from permutationX
                    cards[x].cost.splice(splC, 1); // Remove it from cards[x].cost (mana cost)
                    console.log(x);
                    console.log(k);
                    console.log(cards[x].cost);
                    console.log(cards[x].costH);
                    console.log(permutation1);
                    console.log(permutationOneH);
                } else { // Otherwise they don't have the required mana
                    permutation1 = permutationOneH; // Reset mana in permutationX
                    cards[x].cost = cards[x].costH; // Reset cards[x].cost
                    console.log(x);
                    console.log(k);
                    console.log(cards[x].cost);
                    console.log(cards[x].costH);
                    console.log(permutation1);
                    console.log(permutationOneH);
                    return false; // permutationX has failed to pay for the cost
                }
            }
        }
        
        // If you've made it this far, all colored mana has been accounted for and only "1", or generic mana, remain
        if (cards[x].cost.length > permutation1.length) { // If the remaining cards[x].cost (mana cost) is greater than what the player has
            permutation1 = permutationOneH; // Reset mana in permutationX
            cards[x].cost = cards[x].costH; // Reset cards[x].cost
            console.log(x);
            console.log(k);
            console.log(cards[x].cost);
            console.log(cards[x].costH);
            console.log("perm" + permutation1);
            console.log("permH" + permutationOneH);
            return false; // Not enough generic mana, permutationX has failed to pay for the cost
        } else {
            permutation1 = permutationOneH; // Reset mana in permutationX
            cards[x].cost = cards[x].costH; // Reset cards[x].cost
            console.log(x);
            console.log(k);
            console.log(cards[x].cost);
            console.log(cards[x].costH);
            console.log("perm" + permutation1);
            console.log("permH" + permutationOneH);
            return true; // Success! Colored mana accounted for and enough left over to pay for the generic mana
        }
    }


    // Functions to show or hide the "results" of the calculation
    function hideEm() {
        $("#calc-container").hide();
    }
    function showEm() {
        $("#calc-container").show();
    }


    // Click event for basic lands
    $(".basic").on("click", function () {

        // Adds picture of the corresponding land to the on-screen mana pool
        $("#internal-land-container").append(`<div class="landRenderedImg"><img src="assets/images/${$(this).attr("name")}.jpg" height="86"></div>`);

        // Which basic land was pressed?
        if ($(this).attr("value") == "p") {
            // Push the coresponding color into the "lands" and "landsH" arrays
            lands.push(p);
            landsH.push(p);
        }

        if ($(this).attr("value") == "i") {
            lands.push(i);
            landsH.push(i);
        }

        if ($(this).attr("value") == "s") {
            lands.push(s);
            landsH.push(s);
        }

        if ($(this).attr("value") == "m") {
            lands.push(m);
            landsH.push(m);
        }

        if ($(this).attr("value") == "f") {
            lands.push(f);
            landsH.push(f);
        }

        console.log(lands);

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

        // Turns off the functionality of the buttos until reset
        isCalc = true;

        // For each land chosen, create the 5 possible permutations those lands could produce
        for (z = 0; z < lands.length; z++) {
            permutation1.push(lands[z][0]);
            permutation2.push(lands[z][1]);
            permutation3.push(lands[z][2]);
            permutation4.push(lands[z][3]);
            permutation5.push(lands[z][4]);
            permutationOneH.push(lands[z][0]);
            permutation2H.push(lands[z][1]);
            permutation3H.push(lands[z][2]);
            permutation4H.push(lands[z][3]);
            permutation5H.push(lands[z][4]);
        }

        // Then run the "outside();" function, where most of our processing is done
        outside();

        // Show the results!
        showEm();

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
        permutationOneH = [];
        permutation2H = [];
        permutation3H = [];
        permutation4H = [];
        permutation5H = [];
        isCalc = false;
        cards = cardsOneH;
        $("#internal-land-container").empty();
        $("#calc-card-pool").empty();
        hideEm();

    });

    // Hides the results initially
    hideEm();

});