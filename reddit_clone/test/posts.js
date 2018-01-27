let chai = require('chai');
const chaiHttp = require('chai-http');
let expect = chai.expect;
let should = chai.should();

chai.use(chaiHttp);
const Post = require('../models/post.js');

describe('Posts', function() {
    let countr;
    it('should return a new post at POST /posts', function(done) {
        Post.find({}).then(function(error, posts) {
            countr = posts.count;
            let head = {
                title: "JULIE",
                url: "test://scholarship.com",
                summary: "test last body"
            }
            chai.request('localhost:3000')
            chai.post('/posts', head)
            chai.end(function(error, res) {
                //console.log('success')
            })
        }).catch((error) => done(error))
    });
})