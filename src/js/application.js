class DropDownMenu {
  #controllerButtonName;

  #menuItems = new Map();

  constructor(controllerButtonName = "...") {
    this.#controllerButtonName = controllerButtonName;
  }

  addMenuItem(name, link) {
    if (name === "" || link === "") return;

    this.#menuItems.set(name, link);
  }

  removeMenuItem(name) {
    this.#menuItems.delete(name);
  }

  getMenuItemLink(name) {
    return this.#menuItems.get(name);
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
  if (typeof(text) !== "string") return text;

  const [firstWord, remainingWord] = [text.at(0), text.substring(1)];
  return `${firstWord.toUpperCase()}${remainingWord}`;
};

export { DropDownMenu, capitalizeFirstLetter };
