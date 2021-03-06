const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

describe('site', () => {
    it('Should have home page', (done) => {
        // In this case we test that the home page loads
        chai.request('localhost:3000')
            .get('/posts')
            .end((err, res) => {
                if (err) {
                    done(err)
                }
                res.status.should.be.equal(200)
                done() // Call done if the test completed successfully.
            })
    })
})