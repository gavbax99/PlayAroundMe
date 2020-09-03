todo:
<!-- - favicon -->
<!-- - modal
  - about
  - how to
  - too many permutations
  - too many lands -->
- scale for tablet/mobile
- add more sets
<!-- - documentation for how to add new sets -->
- final touch ups

/setcreator
Abrade@
Ad Nauseam@
Balduvian Rage@
Brainstorm@
Brimstone Volley@
Cast Down@
Chord of Calling@
Clear Shot@
Costly Plunder@
Crib Swap@
Crop Rotation@
Crushing Vines@
Cyclonic Rift@
Fatal Push@
Force of Will@
Fortify@
Galvanic Blast@
Hinder@
Invigorate@
Izzet Charm@
Lightning Axe@
Manamorphose@
Metallic Rebuke@
Might of the Masses@
Path to Exile@
Pongify@
Ravenous Trap@
Steel@
Strength of Arms@
Supernatural Stamina@
Sylvan Might@
Temur Battle Rage@
Thirst for Knowledge@
Topple the Statue@
Unlicensed Disintegration@
Valorous Stance@
Weapon Surge

*Note: use eval() safely, users can't parse code

adding a new set:
- in ./Sets:
  - add set.js with relevant cards and mana sources p(now automated)
  - scryfall for images (now automated)
  			- add setbg.jpg from the ai in the root folder (background)
- in ./public/assets/setIcons:
  			- add SETblack.svg from the ai in the root folder (set icon)
- in ./Components/CalculatorOutput.css:
  			- add set icon class at the bottom
- in ./reducers/rootReducer:
  			- import the set
- in .Componenets/DropdownMenu.js:
  			- add the new set in the dropdown menu