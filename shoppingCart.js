/*
model cart as:
. as an object (key value pairs)
items = {1: {name: shirt, id: 1, price: 20}, item2.id: item2, item3.id: item3....}
*/
let shoppingCart = {
    cart: {},

    //add one item to the cart
    addOneItem(item) {
        this.cart[item.id] = item;
    },

    //remove one item from the cart
    removeOneItem(item) {
        delete this.cart[item.id];
    },

    //get a collection of items in the cart
    getItemCollection() {
        return Object.values(this.cart);
    },

    //add one item to cart
    increaseItem(item) {
        item.quantity += 1;
    },

    //remove one item from the cart
    decreaseItem(item) {
        if (item.quantity - 1 < 1) {
            this.removeOneItem(item);
        } else {
            item.quantity -= 1;
        }
    },

    //refactor total quantities and total
    getTotal(totalProperty) {
        let allItems = getItemCollection();
        let total = 0;
        for (item of totalProperty) {
            total += item.totalProperty;
        }

        return total;
    },

    //return total number of items in cart
    totalQuantityItems() {
        return getTotal(item.quantity);
    },

    //return total cost of all items in cart
    totalCostItems() {
        return getTotal(item.price);
    }
}

/*

two different ways to model data:
. as an array
items = [item1, item2, item3....]

. as an object (key value pairs)
items = {1: {name: shirt, id: 1, price: 20}, item2.id: item2, item3.id: item3....}

Differences between dictionaries in python and javascript
python
dictionary = { 'name': 'juan', 'age': 27 }
dictionary.age += 1

class Human:
    def __init__(self, name, age):
    self.name = name
self.age = age

def birthday(self):
    return self.age += 1

juan = Human('juan', 27)
juan.birthday()

// javascript
let juan = {
    name: 'juan',
    age: 27,

    birthday() {
        this.age += 1
    }
}

console.log(juan)
juan.birthday()
console.log(juan.age)
*/