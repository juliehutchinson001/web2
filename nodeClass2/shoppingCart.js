/*
model cart as:
. as an object (key value pairs)
items = {1: {name: shirt, id: 1, price: 20}, item2.id: item2, item3.id: item3....}
*/
class ShoppingCart {
    constructor() {
        this.cart = {};
    }

    addOneItem(item) {
        this.cart[item.id] = item;
    }

    //remove one item from the cart
    removeOneItem(item) {
        delete this.cart[item.id];
    }

    //get a collection of items in the cart
    getItemCollection() {
        return Object.values(this.cart);
    }

    //add one item to cart
    increaseItem(item) {
        item.quantity += 1;
        item.newPriceUpdate();
    }

    //decrease item's quantity from the cart
    decreaseItem(item) {
        if (item.quantity - 1 < 1) {
            this.removeOneItem(item);
        } else {
            item.quantity -= 1;
            item.newPriceUpdate();
        }
    }

    //refactor total quantities and total
    getTotal(totalProperty) {
        let allItems = this.getItemCollection();
        let total = 0;
        for (let item of allItems) {
            total += item[totalProperty];
        }

        return total;
    }

    //return total number of items in cart
    totalQuantityItems() {
        return this.getTotal('quantity');
    }

    //return total cost of all items in cart
    totalCostItems() {
        return this.getTotal('price');
    }
}

class ItemsCart {
    constructor(name, price, id) {
        this.name = name;
        this.id = id;
        this.quantity = 1;
        this.price = price;
    }

    newPriceUpdate() {
        this.price *= this.quantity;
    }
}


/*
//Starting test

let util = require('util');


let shirt = new ItemsCart('shirt', 10, 1)
let pants = new ItemsCart('pants', 20, 2)
let hat = new ItemsCart('hat', 5, 3)
let shoes = new ItemsCart('shoes', 100, 4)

let cart = new ShoppingCart();

cart.addOneItem(shirt);
let allItemsTest = cart.getItemCollection()
let totalQuant = cart.totalQuantityItems()
let totalPrice = cart.totalCostItems()

console.log('all items (shirt): ' + util.inspect(allItemsTest, false, null));
console.log('total quant (1): ' + totalQuant)
console.log('total price (10): ' + totalPrice)

cart.addOneItem(pants);
let allItemsTest2 = cart.getItemCollection()
let totalQuant2 = cart.totalQuantityItems()
let totalPrice2 = cart.totalCostItems()

console.log('--------------------------------')
console.log('second item')
console.log('all items (shirt, pants): ' + util.inspect(allItemsTest2, false, null));
console.log('total quant (2): ' + totalQuant2)
console.log('total price (30): ' + totalPrice2)


cart.increaseItem(shirt)
console.log('--------------------------------')
console.log('Increase quant')

console.log('all items (shirt, pants): ' + util.inspect(cart.getItemCollection(), false, null));
console.log('total quant (3): ' + cart.totalQuantityItems())
console.log('total price (40): ' + cart.totalCostItems())

cart.removeOneItem(shirt);
console.log('--------------------------------')
console.log('removing item')
console.log('all items (pants): ' + util.inspect(cart.getItemCollection(), false, null));
console.log('total price (20): ' + cart.totalCostItems())

//ending test




two different ways to model data:
. as an array
items = [item1, item2, item3....]

. as an object (key value pairs)
items = {1: {name: shirt, id: 1, price: 20}, item2.id: item2, item3.id: item3....}

Differences between dictionaries in python and javascript
python
dictionary = { 'name': 'julie', 'age': 27 }
dictionary.age += 1

class Human:
    def __init__(self, name, age):
    self.name = name
self.age = age

def birthday(self):
    return self.age += 1

julie = Human('julie', 27)
julie.birthday()

// javascript
let julie = {
    name: 'julie',
    age: 27,

    birthday() {
        this.age += 1
    }
}

console.log(julie)
julie.birthday()
console.log(julie.age)
*/