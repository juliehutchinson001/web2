const mocha = require('mocha')
    // const chai = require('chai').
const expect = require('chai').expect

//const Item = require('../cart').Item
const { Item, getCart, addItem } = require('../cart')

let testPost;

before(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
        // testPost = new Post({ name: "TESTING" });
        // return testPost.save();
});

beforeEach(() => {
    console.log('--------------------------');
})

after(() => {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<");
    // return testPost.remove();
});

describe('testing Shopping Cart items', () => {
    beforeEach(() => {
        console.log('........................');
    })

    it('Should create a new Item with name and price', () => {
        const item = new Item('Apple', 1.99)
        expect(item.name).to.be.a('string');
        expect(item.price).to.be.a('number');
        expect(item.name).to.be.equal("Apple")
        expect(item.price).to.be.equal(1.99)
    });

    it('Should return an array containing all items in cart', () => {
        const cart = getCart();
        expect(cart).to.be.a('array');
        expect(cart).to.have.lengthOf(0);
        cart.push('A');
        expect(cart).to.have.lengthOf(1);
    });

})