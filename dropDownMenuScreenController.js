const capitalizeFirstLetter = function capitalizeFirstLetter(text) {
  if (typeof text !== "string") return text;

  const [firstWord, remainingWord] = [text.at(0), text.substring(1)];
  return `${firstWord.toUpperCase()}${remainingWord}`;
};

class DropDownMenuScreenController {
  #dropDownMenu;

  #controllerButtonName;

  #menuItems;

  constructor(dropDownMenuObject = {}) {
    this.#dropDownMenu = dropDownMenuObject;
    this.#controllerButtonName = this.#dropDownMenu.getControllerButtonName();
    this.#menuItems = this.#dropDownMenu.getMenuItems();
  }

  #hideElement(elementToHide) {
    elementToHide.classList.add("hidden");
    return this;
  }

  #showElement(elementToShow) {
    elementToShow.classList.remove("hidden");
    return this;
  }

  #addDefaultStyles() {
    const styles = `
    .drop-down-menu {
      position: relative;
    }
    
    .drop-down-content {
      position: absolute;
      top: 100%;
      display: grid;
    }
    
    .drop-down-content.hidden {
      display: none;
    }
    `;
    
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
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
    this.#menuItems.forEach((menuItemLink, menuItemName) => {
      const menuItemElement = document.createElement("a");
      menuItemElement.classList.add("drop-down-menu-item");
      menuItemElement.textContent = capitalizeFirstLetter(menuItemName);
      menuItemElement.href = menuItemLink;
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
    dropDownControllerButtonElement.addEventListener("click", (event) => {
      this.#menuButtonClickHandler(event);
    });

    const dropDownContentElement = document.createElement("div");
    dropDownContentElement.classList.add("drop-down-content", "hidden");
    this.#createDropDownMenuItems(dropDownContentElement);

    dropDownMenuElement.appendChild(dropDownControllerButtonElement);
    dropDownMenuElement.appendChild(dropDownContentElement);

    this.#addDefaultStyles();
    return dropDownMenuElement;
  }
}

export default DropDownMenuScreenController;
