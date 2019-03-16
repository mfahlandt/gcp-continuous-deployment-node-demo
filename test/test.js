// Import the dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Users", () => {
  describe("GET /", () => {
    it("should get all user record", done => {
      chai
        .request(app)
        .get("/users/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    // Test to get single student record
    it("should get a single user record", done => {
      const id = 1;
      chai
        .request(app)
        .get(`/users/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test to get single student record
    it("should not get a single user record", done => {
      const id = 5;
      chai
        .request(app)
        .get(`/users/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
