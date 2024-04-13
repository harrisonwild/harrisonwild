const menuItems = [
 {
    name: "Latte",
    description: "A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top",
    price: "4.50"
 },
 {
    name: "Cappucino",
    description: "The perfect balance of espresso, steamed milk and foam",
    price: "4.50"
 },
 {
    name: "Espresso",
    description: "Concentrated form of coffee served in small, strong shots",
    price: "3.50"
 },
 {
    name: "Mocha",
    description: "A shot of espresso is combined with chocolate powder, followed by milk or cream",
    price: "5.25"
 },
 {
    name: "Matcha Latte",
    description: "Made from finely ground green tea leaves that are mixed with steamed milk",
    price: "5.50"
 },
 {
    name: "Cold Brew",
    description: "Coffee that has been brewed with cold water for 24 hours",
    price: "4.50"
 },
 {
    name: "Frappe",
    description: "Refreshing iced coffee drink, blended with ice and milk",
    price: "6.50"
 },
];
function displayMenuItems() {
    // Loop through the menuItems array
    menuItems.forEach(item => {
    // Create a card div for each menu item
    const card = document.createElement("div");
    card.classList.add("menu-card");
    // Create elements for name, description, price, and button
    const nameElement = document.createElement("h3");
    nameElement.textContent = item.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = item.description;

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + item.price.toFixed(2);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.classList.add("add-to-cart");

    // Append name, description, price, and button to the card
    card.appendChild(nameElement);
    card.appendChild(descriptionElement);
    card.appendChild(priceElement);
    card.appendChild(addButton);

    // Append the card to the document body
    document.body.appendChild(card);
  });
}

// Call the function to display menu items
displayMenuItems();

// Function to add items to shopping cart
function addToCart(item) {
    // Add the selected menu item to the shopping cart
    shoppingCart.push(item);
    // Update the shopping cart summary
    displayShoppingCart();
}