# Drop Down Menu Generator

This is to generate a drop down menu with minimal styles. On click, the menu will toggle between shown and hidden stages.
## Import 

For commonjs,
```javascript
const { DropDownMenu, DropDownMenuScreenController } = require('dropdown-menu-generate');
```

For ES Module,
```javascript
import { DropDownMenu, DropDownMenuScreenController } from 'dropdown-menu-generate';
```




## Usage/Examples

This will generate a dropdown menu that you can play around with.

```javascript
const controllerName = "More";
const dropDownMenu = new DropDownMenu(controllerName);
dropDownMenu.addMenuItem("Add", "https://www.example.com"); // (itemName, link)

const screenController = new DropDownMenuScreenController(dropDownMenu); // pass the DropDownMenuObject
const dropDownMenuElement = screenController.createDropDownMenu();
```

To make changes to the styles of the elements, 

```javascript
document.querySelector(".dropdown-menu"); // for the dropdown menu container created
document.querySelector(".dropdown-menu-button"); // for the button to click
document.querySelector(".dropdown-menu-content"); // for the menu items container
document.querySelector(".dropdown-menu-item"); // for individual items

```