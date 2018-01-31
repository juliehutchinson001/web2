// npm run test-watch

const chai = require('chai');
const expect = chai.expect;
const app = require('../server/server').app // Import server.js
const chaiHTTP = require('chai-http'); // Import chaiHTTP

chai.use(chaiHTTP); // Tell chai to user chaiHTTP

const agent = chai.request.agent(app); // set the request agent to use your express app

// const User = require('../models/user');
const Post = require('../server/models/post');



it("Should return an array of posts", (done) => {
    agent.get('./post').send().end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200)
        done()
    })
});
it("Should add a new post");
it("Should fetch a post with valid properties");
it("Should create a new user");
it("Should find a user with an id");
it("Should find a user with valid properties");
it("Should remove a user");