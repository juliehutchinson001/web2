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