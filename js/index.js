const fragment = document.createDocumentFragment();

function qSA(selector) {
  return [...document.querySelectorAll(selector)];
}

// Select elements
function qS(selector) {
  return document.querySelector(selector);
}

const mrpInput = qS("#mrp");
const sellInput = qS("#sell");
const productInput = qS("#product");
const quantityInput = qS("#quantity");
const container = qS(".container");
const cardContainer = qS(".card-container");
const containerItem = qS(".container-item");

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("submit-btn")) {
    makeCards(mrpInput, sellInput, productInput, quantityInput);
  }
  if (event.target.classList[0] === "delete") {
    event.target.parentElement.parentElement.remove();
  }
  if (event.target.classList[0] === "edit") {
    containerItem.style.display = "none";
    document.body.classList.add("center");
    editFunctionality(event.target);
  }
  if (event.target.classList[2] === "close") {
    showHideEditContainer();
  }
  if (event.target.id === "submit-edit-btn") {
    editInputValue(event.target);
  }
});

function makeAndFixElement(ele, attType, attName, appendWith) {
  const element = document.createElement(ele);

  if (attType && attName) {
    element.setAttribute(attType, attName);
  }
  if (!!appendWith) {
    appendWith.append(element);
  }

  return element;
}

function makeCards(mrpValue, sellValue, productName, Quantity) {
  if (
    mrpInput.value.trim() === "" ||
    sellInput.value.trim() === "" ||
    productInput.value.trim() === "" ||
    quantityInput.value.trim() === ""
  ) {
    alert("fill all the Inputs ");
    mrpInput.value = "";
    sellInput.value = "";
    productInput.value = "";
    quantityInput.value = "";
  } else {
    const cardDiv = makeAndFixElement("div", "class", "card", cardContainer);
    const cardItem = makeAndFixElement("div", "class", "card-item", cardDiv);
    const mrpDiv = makeAndFixElement(
      "div",
      "class",
      "mrpValue store-value",
      cardItem
    );
    const mrpValueDiv = makeAndFixElement(
      "div",
      "class",
      "mrp-Value value",
      null
    );

    const sellDiv = makeAndFixElement(
      "div",
      "class",
      "sellValue store-value",
      cardItem
    );
    const sellValueDiv = makeAndFixElement(
      "div",
      "class",
      "sell-Value value",
      null
    );

    const productDiv = makeAndFixElement(
      "div",
      "class",
      "productName store-value",
      cardItem
    );
    const productNameDiv = makeAndFixElement(
      "div",
      "class",
      "product-name value",
      null
    );

    const QuantityDiv = makeAndFixElement(
      "div",
      "class",
      "Quantity store-value",
      cardItem
    );
    const QuantityValueDiv = makeAndFixElement(
      "div",
      "class",
      "Quantity-value value",
      null
    );
    const buttonContainer = makeAndFixElement(
      "div",
      "class",
      "button-container",
      cardDiv
    );
    const editBtn = makeAndFixElement(
      "button",
      "class",
      "edit btn",
      buttonContainer
    );
    const deleteBtn = makeAndFixElement(
      "button",
      "class",
      "delete btn",
      buttonContainer
    );

    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";

    mrpDiv.innerText = "Mrp :";
    sellDiv.innerText = "Sell :";
    productDiv.innerText = "Product :";
    QuantityDiv.innerText = "Quantity :";

    mrpValueDiv.innerText = mrpValue.value;
    sellValueDiv.innerText = sellValue.value;
    productNameDiv.innerText = productName.value;
    QuantityValueDiv.innerText = Quantity.value;

    mrpDiv.appendChild(mrpValueDiv);
    sellDiv.appendChild(sellValueDiv);
    productDiv.appendChild(productNameDiv);
    QuantityDiv.appendChild(QuantityValueDiv);

    mrpInput.value = "";
    sellInput.value = "";
    productInput.value = "";
    quantityInput.value = "";
  }
}

const placeHolderNames = ["ProductName", "Mrp", "ProductPrice", "Quantity"];
const className = [
  "product-edit",
  "mrp-edit",
  "productPrice-edit",
  "quanity-edit",
];
const editFunctionality = (getElement) => {
  const editContainer = makeAndFixElement(
    "div",
    "class",
    "edit-container",
    container
  );

  const getCard = getElement.parentElement.parentElement;

  const productInfo = [
    getCard.querySelector(".mrp-Value").innerText,
    getCard.querySelector(".sell-Value").innerText,
    getCard.querySelector(".product-name").innerText,
    getCard.querySelector(".Quantity-value").innerText,
  ];

  const iconsDiv = makeAndFixElement("div", "id", "icon-div", editContainer);
  for (let i = 0; i <= 3; i++) {
    const inputs = makeAndFixElement(
      "input",
      "class",
      `edit-input ${className[i]}`,
      editContainer
    );
    inputs.value = productInfo[i];
    inputs.setAttribute("placeholder", placeHolderNames[i]);
  }
  const editButton = makeAndFixElement(
    "button",
    "id",
    "submit-edit-btn",
    editContainer
  );

  iconsDiv.innerHTML = '<i class="bx bx-x close"></i>';
  editButton.innerText = "submit Edit";
};

function showHideEditContainer() {
  document.body.classList.remove("center");
  const editContainer = qS(".edit-container");
  editContainer.style.display = "none";
  containerItem.style.display = "block";
}

function editInputValue(getElement) {
  const parentContainer = getElement.parentElement;

  const productNewValue = parentContainer.querySelector(".product-edit");
  const mrpNewValue = parentContainer.querySelector(".mrp-edit");
  const productPriceNewValue =
    parentContainer.querySelector(".productPrice-edit");
  const quanityNewValue = parentContainer.querySelector(".quanity-edit");

  const newMrpValue = qS(".mrp-Value");
  const newSellValue = qS(".sell-Value");
  const newProductalue = qS(".product-name");
  const newQuantityValue = qS(".Quantity-value");

  newMrpValue.innerText = productNewValue.value;
  newSellValue.innerText = mrpNewValue.value;
  newProductalue.innerText = productPriceNewValue.value;
  newQuantityValue.innerText = quanityNewValue.value;

  document.body.classList.remove("center");
  const editContainer = qS(".edit-container");
  editContainer.style.display = "none";
  containerItem.style.display = "block";
}

fragment.append(container);
document.body.append(fragment);
