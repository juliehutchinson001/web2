const cart = []

const Item = function Item(name, price, qty = 1) {
    this.name = name
    this.price = price
    this.qty = qty
}
module.exports.Item = Item

module.exports.getCart = () => {
    // should return an array of Items
    return cart.slice() // Shallow copy
}

module.exports.addItem = (name, price) => {
    const addedItem = new Item(name, price);
    cart.push(addedItem);
    // return getCart()
}