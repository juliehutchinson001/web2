let chai = require('chai');
const chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

const Post = require('../server/models/post');

describe('Posts', function() {
    let beforeCountr;
    let afterCountr;
    it('should return a new post at POST /posts', function(done) {

        // Post.find({ title: 'test title' }, function(posts) {
        //     console.log('///////////////////')
        //     beforeCountr = posts.count;
        // })
        let head = new Post({
            title: "JULIE",
            url: "test://scholarship.com",
            summary: "test last body"
        })
        chai.request('localhost:3000')
            .post('/posts')
            .send(head)
            .end(function(err, res) {
                if (err) {
                    console.log('ERROR----------------: ' + err)
                } else {
                    console.log('RESPONSE----------------: ' + res)
                }
            })
        done()
    })
})




// describe('Posts', function() {
//     let beforeCountr;
//     it('should return a new post at POST /posts', function(done) {
//         // Post.find({}).then(function(error, posts) {
//         Post.find({}).then(function(posts) {
//             beforeCountr = posts.count;
//             let head = {
//                 title: "JULIE",
//                 url: "test://scholarship.com",
//                 summary: "test last body"
//             }
//             chai.request('localhost:3000')
//             chai.post('/posts')
//             chai.send(head)
//             chai.end(function(res) {
//                 //console.log('success')
//                 Post.find({}).then(function(posts) {
//                         expect(posts.count).to.equal(beforeCountr + 1);
//                     }).catch(function(error) {
//                         done(error)
//                     }) // juan
//                 done() //juan
//             })
//         }).catch(function(error) { done(error) })
//     });
// })