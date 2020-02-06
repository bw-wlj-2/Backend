const request = require("supertest");

const server = require("./server");

describe("server.js", function() {
  describe("environment", function() {
    it("should set environment to development", function() {
      expect(process.env.NODE_ENV).toBe("development");
    });
  });

  describe("GET /api", function() {
    it("should return a 201 OK", function() {
      // spin up the server
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(201);
        });
      // make GET request to /
      // look at the http status code for the response
    });

    it("should return a JSON", function() {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("should return { working: 'true' }", function() {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.body.working).toBe("true");
        });
    });

    it("should block access to users without authorization", function() {
      return request(server)
        .get("/api/users")
        .then((res) => {
          console.log(res.body);
          expect(res.status).toBe(404);
        });
    });

    it("should reject an incorrect password", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "admin", password: "wrong" })
        .then((res) => {
          expect(res.status).toBe(404);
        });
    });
  });
});
