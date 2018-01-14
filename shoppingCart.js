let shoppingCart = {
    cart: {},

    addOneItem(item) {
        this.cart[item.id] = item;
    },

    removeOneItem(item) {
        delete this.cart[item.id];
    },

    getItemCollection() {
        return Object.values(this.cart);
    },

    increaseItem(item) {
        item.quantity += 1;
    },

    decreaseItem(item) {
        if (item.quantity - 1 < 1) {
            this.removeOneItem(item);
        } else {
            item.quantity -= 1;
        }
    },

    totalQuantityItems() {
        let allItems = getItemCollection();
        let totalQuantity = 0;
        for (item of allItems) {
            totalQuantity += item.quantity;
        }

        return totalQuantity;
    },

    totalCostItems() {
        let allItems = getItemCollection();
        let totalPrice = 0;
        for (item of allItems) {
            totalPrice += item.price;
        }
        return totalPrice;
    }
}

class Products {
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.quantity = 1;
        this.price = price * this.quantity;

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