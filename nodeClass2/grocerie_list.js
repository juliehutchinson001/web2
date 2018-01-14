// Empty Array of items to be collected
var cartItems = [];


// created a new item

// function addNewItem(name, description, images, quantity, price, item_id) {
// 	var apple = new NewItem ("Candy Apple", "candy with a fruit", "https://image.com", 4, 5.78, "CAPLE12345");
// }

cartItems.push(apple);

if (cartItems.length === 0) {
    alert("Sorry you cannot take out anymore items. You have reached 0");
} else {

    cartItems.pop();

}

// print the items 
for (var i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
}

// print out the total number of items in the cart
function totalItems() {
    console.log(cartItems.length);
}

// print out the total cost of the items in the cart
function totalPrice() {
    let totalSum = 0;

    if (NewItem.quantity > 1) {

    }
}




// Object constructor for creating new items
function NewItem(name, description, images, quantity, price, item_id) {
    this.name = name;
    this.description = description;
    this.images = images;
    this.quantity = quantity;
    this.price = price;
    this.item_id = item_id
}