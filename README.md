todo:
readme

*Note: use eval() safely, users can't parse code

adding a new set:
- in ./Sets:
  - add set.js with relevant cards and mana sources (now automated)
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