const mocha = require('mocha');
const assert = require('chai').assert;
const { ShoppingCart, ItemsCart } = require('../shoppingCart');

let item;
let cart;
let anotherItem;

beforeEach(function() {
    item = new ItemsCart('lettuce', 2, 001);
    cart = new ShoppingCart();
    anotherItem = new ItemsCart('apple', 1, 015);
})

describe('ItemsCart', function() {
    it('assert that an item has a name', function() {
        assert.typeOf(item.name, 'string');
        assert.equal(item.name, 'lettuce');
    })

    it('assert an item has a price', function() {
        assert.typeOf(item.price, 'number');
        assert.equal(item.price, 10);
    })
})

describe('ShoppingCart', function() {
    it('assert that function removes items from cart works', function() {
        cart.addOneItem(item);
        assert.equal(cart.totalQuantityItems(), 1);
        cart.removeOneItem(item)
        assert.equal(cart.totalQuantityItems(), 0);
    });

    it('assert that an array containing all items in cart is returned', function() {
        assert.typeOf(cart.getItemCollection(), 'array');
    })

    it('assert addition of new item to the shopping cart', function() {
        cart.addOneItem(item);
        const currentItems = cart.getItemCollection()[0]
        assert.equal(currentItems.name, 'lettuce');
    });

    it('assert that function returns the number of items in the cart', function() {
        assert.typeOf(cart.getTotal(), 'number');
        assert.equal(cart.getTotal(), 0);
        cart.addOneItem(item);
        assert.equal(cart.getTotal(), 1);
    });

    // Stretch challenges
    it('assert the count of items in the cart', function() {
        assert.equal(cart.totalQuantityItems(), 0);

        cart.addOneItem(item);
        assert.equal(cart.totalQuantityItems(), 1);

        assert.equal(item.quantity, 1);

        cart.increaseItem(item)
        assert.equal(cart.totalQuantityItems(), 2);

        assert.equal(item.quantity, 2);
    });



})











/* const mocha = require('mocha')
// const chai = require('chai').
const assert = require('chai').assert

//const Item = require('../cart').Item
const { Item, getCart, addItem } = require('../cart')

let testPost;

before(function() {
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
    // testPost = new Post({ name: "TESTING" });
    // return testPost.save();
});

beforeEach(function() {
console.log('--------------------------');
})

after(function() {
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<");
// return testPost.remove();
});

describe('testing Shopping Cart items', function() {
beforeEach(function() {
    console.log('........................');
})

it('Should create a new Item with name and price', function() {
    const item = new Item('Apple', 1.99)
    assert(item.name).to.be.a('string');
    assert(item.price).to.be.a('number');
    assert(item.name).to.be.equal("Apple")
    assert(item.price).to.be.equal(1.99)
});

it('Should return an array containing all items in cart', function() {
    const cart = getCart();
    assert(cart).to.be.a('array');
    assert(cart).to.have.lengthOf(0);
    cart.push('A');
    assert(cart).to.have.lengthOf(1);
});

it('Should add a new item to the shopping cart', function() {
    const cart = getCart();
    addItem("apple", 5)
    const cart2 = getCart()

    assert(cart2).to.have.lengthOf(cart.length + 1);
    assert(cart2.length).to.equal(cart.length + 1);
});

it('Should return the number of items in the cart');
it('Should remove items from cart');
// Stretch challenges
it('Should update the count of items in the cart');
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart');
})

describe('testing posts', function() {
beforeEach(function() {
    console.log('===========================');
})
it('should fetch an array of posts', function() {

});
it('should add a post');
it('should remove a post');
});

describe('testing users', function() {
it('should fetch an array of users');
it('should add a user');
it('should remove a user');
});

*/