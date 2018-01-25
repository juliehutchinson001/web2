const mocha = require('mocha')
    // const chai = require('chai').
const expect = require('chai').expect

//const Item = require('../cart').Item
const { Item, getCart, addItem } = require('../cart')

let testPost;