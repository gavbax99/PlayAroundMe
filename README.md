## PlayAroundMe Calculator

[Use the Calculator here.](playaroundme.com)

PlayAroundMe Calculator is for use in Magic: the Gathering limited formats. The PlayAroundMe calculator is used to determine what instant effects your opponent could have given their available resources so that you may better 'play around' those effects in-game. This tool is most useful when playing a new set with still unfamiliar cards.

#### How to Use

1. Select the set of Magic: the Gathering you're playing.

![Select the set](/github_assets/how-to-1.jpg)

2. Input the opponent's open mana producing resources.

![Input mana sources](/github_assets/how-to-2.jpg)

3. Click calculate to return a list of possible instant speed cards they could potentially play.

![Calculate](/github_assets/how-to-3.jpg)

4. Sort the list by severity, CMC, color, or by counterspells, pump, removal.

![Sort](/github_assets/how-to-4.jpg)

#### About

- Build with React, Redux, and JavaScript ES6.
- Utilized [Scryfall's API](https://scryfall.com/docs/api) for building new sets.
- Designed and developed by Gavin Baxter.

#### Notes

- No, this app is not legal in tournament play. It's best used playing MTGO or Arena where you can alt-tab into the app quickly. 
- Due to the unique nature of mana effects in MTG, not all effects can be taken into account. Resource-bending cards like [Chromatic Orrery](https://scryfall.com/card/m21/382/chromatic-orrery) or [Commander's Sphere](https://scryfall.com/card/cmr/306/commanders-sphere) are released every set and it would require a lot of effort to customize each set. This is and will remain simple.