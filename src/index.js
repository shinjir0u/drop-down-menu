import "./css/style.css";

const hideElement = function hideElement(elementToHide) {
  elementToHide.classList.add("hidden");
};

const showElement = function showElement(elementToShow) {
  elementToShow.classList.remove("hidden");
};

const menuButtonClickHandler = function menuButtonClickHandler(event) {
  const dropDownContent = event.target.nextElementSibling;
  const clicked = (event.target.dataset.clicked !== "false");

  if (clicked) {
    hideElement(dropDownContent);
  } else {
    showElement(dropDownContent);
  }
  // eslint-disable-next-line no-param-reassign
  event.target.dataset.clicked = !clicked;
};

const capitalizeFirstLetter = function capitalizeFirstLetter(text) {
  const [firstWord, remainingWord] = [text.at(0), text.substring(1)];
  return `${firstWord.toUpperCase()}${remainingWord}`;
};

const createDropDownMenuItems = function getCreatedDropDownMenuItems(
  menuItems,
  parentElement,
) {
  menuItems.forEach((menuItem) => {
    const menuItemElement = document.createElement("a");
    menuItemElement.classList.add("drop-down-menu-item");
    menuItemElement.textContent = capitalizeFirstLetter(menuItem);
    parentElement.appendChild(menuItemElement);
  });
};

const createDropDownMenu = function getCreatedDropDownMenu(
  controllerButtonName,
  ...menuItems
) {
  const dropDownMenu = document.createElement("div");
  dropDownMenu.classList.add("drop-down-menu");

  const dropDownControllerButton = document.createElement("button");
  dropDownControllerButton.type = "button";
  dropDownControllerButton.classList.add("drop-down-controller-button");
  dropDownControllerButton.textContent = controllerButtonName;
  dropDownControllerButton.dataset.clicked = false;
  dropDownControllerButton.addEventListener("click", menuButtonClickHandler);

  const dropDownContent = document.createElement("div");
  dropDownContent.classList.add("drop-down-content");
  createDropDownMenuItems(menuItems, dropDownContent);

  dropDownMenu.appendChild(dropDownControllerButton);
  dropDownMenu.appendChild(dropDownContent);
  return dropDownMenu;
};

const menu = createDropDownMenu("doSomething", "add", "delete", "edit");
document.documentElement.lastElementChild.appendChild(menu);
