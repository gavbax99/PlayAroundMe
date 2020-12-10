Adding a new set:
- in ./Sets:
  - add set.js with relevant cards and mana sources (now automated with setcreator; reference old sets)
  - scryfall for images (now automated with setcreator; reference old sets)
  - add setbg.jpg from the ai in the root folder (background)
- in ./public/assets/setIcons:
  - add SETblack.svg from the ai in the root folder (set icon)
- in ./Components/CalculatorOutput.css:
  - add set icon class at the bottom
- in ./reducers/rootReducer:
  - import the set
- in .Componenets/DropdownMenu.js:
  - add the new set in the dropdown menu

Testing locally:
- nodemon start

Uploading to prod:
- npm run-script build
- /public_html
  - delete all but .htaccess & cgi-bin
  - dump contents of ./build into /public_html