import { Error } from 'mongoose';

const mocha = require('mocha');
const chai = require('chai');

const utils = require('../utils');
const expect = require(chai.expect);

//console.log(utils.sayHello())
//console.log(utils.area(5, 5))

it('should say hello', () => {
    // if (utils.sayHello() !== "Hello") {
    //     throw new Error("String does not match");

    const hello = utils.sayHello();
    expect(hello).to.be.a('string');
    expect(hello).to.equal('Hello');
    expect(hello).with.lengthOf(5);
});

it('should print the area based on width and height', () => {
    const width = 6;
    const height = 12;
    const area = utils.area();
    expect(area).to.be.a('number');
    expect(area).to.equal(w * h);
});