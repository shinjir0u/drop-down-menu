import "./css/style.css";
import { DropDownMenu, capitalizeFirstLetter } from "../js/application";

class ScreenController {
  #dropDownMenu;

  #controllerButtonName;

  #menuItems;

  constructor(controllerButtonName, ...menuItems) {
    this.#controllerButtonName = controllerButtonName;
    this.#menuItems = menuItems;
    this.#dropDownMenu = new DropDownMenu(
      this.#controllerButtonName,
      this.#menuItems,
    );
  }

  #hideElement(elementToHide) {
    elementToHide.classList.add("hidden");
    return this;
  }

  #showElement(elementToShow) {
    elementToShow.classList.remove("hidden");
    return this;
  }

  #menuButtonClickHandler(event) {
    const dropDownContent = event.target.nextElementSibling;
    const clicked = event.target.dataset.clicked === "true";

    if (clicked) {
      this.#hideElement(dropDownContent);
    } else {
      this.#showElement(dropDownContent);
    }
    // eslint-disable-next-line no-param-reassign
    event.target.dataset.clicked = !clicked;
  }

  #createDropDownMenuItems(parentElement) {
    this.#menuItems.forEach((menuItem) => {
      const menuItemElement = document.createElement("a");
      menuItemElement.classList.add("drop-down-menu-item");
      menuItemElement.textContent = capitalizeFirstLetter(menuItem);
      parentElement.appendChild(menuItemElement);
    });
    return this;
  }

  createDropDownMenu() {
    const dropDownMenuElement = document.createElement("div");
    dropDownMenuElement.classList.add("drop-down-menu");

    const dropDownControllerButtonElement = document.createElement("button");
    dropDownControllerButtonElement.type = "button";
    dropDownControllerButtonElement.classList.add(
      "drop-down-controller-button",
    );
    dropDownControllerButtonElement.textContent = this.#controllerButtonName;
    dropDownControllerButtonElement.dataset.clicked = false;
    dropDownControllerButtonElement.addEventListener(
      "click",
      (event) => {
        this.#menuButtonClickHandler(event);
      },
    );

    const dropDownContentElement = document.createElement("div");
    dropDownContentElement.classList.add("drop-down-content", "hidden");
    this.#createDropDownMenuItems(dropDownContentElement);

    dropDownMenuElement.appendChild(dropDownControllerButtonElement);
    dropDownMenuElement.appendChild(dropDownContentElement);
    return dropDownMenuElement;
  }
}

const dropDownMenuElement = new ScreenController("hi", "jkfd", "lli", "lol").createDropDownMenu();
document.documentElement.lastElementChild.appendChild(dropDownMenuElement);