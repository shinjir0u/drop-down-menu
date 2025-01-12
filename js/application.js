class DropDownMenu {
  #controllerButtonName;

  #menuItems;

  constructor(controllerButtonName = "...", menuItems = []) {
    this.#controllerButtonName = controllerButtonName;
    this.#menuItems = [...menuItems];
  }

  getControllerButtonName() {
    return this.#controllerButtonName;
  }

  setControllerButtonName(controllerButtonName) {
    this.#controllerButtonName = controllerButtonName;
  }

  getMenuItems() {
    return this.#menuItems;
  }

  getMenuItemIndexWithName(menuItemName) {
    return this.#menuItems.indexOf(menuItemName);
  }
}

const capitalizeFirstLetter = function capitalizeFirstLetter(text) {
  const [firstWord, remainingWord] = [text.at(0), text.substring(1)];
  return `${firstWord.toUpperCase()}${remainingWord}`;
};

export { DropDownMenu, capitalizeFirstLetter };
