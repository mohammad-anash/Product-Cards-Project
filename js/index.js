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
    document.querySelector(".card").remove();
  }
  if (event.target.classList[0] === "edit") {
    containerItem.style.display = "none";
    document.body.classList.add("center");
    editFunctionality();
  }
  if (event.target.classList[2] === "close") {
    containerItem.style.display = "block";
    document.body.classList.remove("center");
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
const editFunctionality = () => {
  const editContainer = makeAndFixElement(
    "div",
    "class",
    "edit-container",
    container
  );
  const iconsDiv = makeAndFixElement("div", "id", "icon-div", editContainer);
  for (let i = 0; i <= 3; i++) {
    const inputs = makeAndFixElement(
      "input",
      "class",
      "edit-input",
      editContainer
    );
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

fragment.append(container);
document.body.append(fragment);
