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

			  