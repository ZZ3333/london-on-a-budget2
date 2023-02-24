const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require("../../models/users");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST, when email and password are provided", () => {
    test("the response code is 201", async () => {
      let response = await request(app)
        .post("/users")
        .send({
          email: "poppy@email.com",
          password: "1234",
          firstName: "Poppy",
          lastName: "Allen",
        });
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app)
        .post("/users")
        .send({
          email: "scarlett@email.com",
          password: "1234",
          firstName: "Scarlett",
          lastName: "Davies",
        });
      let users = await User.find();
      let newUser = users[users.length - 1];
      expect(newUser.email).toEqual("scarlett@email.com");
    });
  });

  describe("POST, when password is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({
          email: "skye@email.com",
          firstName: "Skye",
          lastName: "Bishop",
        });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app)
        .post("/users")
        .send({
          email: "skye@email.com",
          firstName: "Skye",
          lastName: "Bishop",
        });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({
          password: "1234",
          firstName: "firstName",
          lastName: "lastName",
        });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app)
        .post("/users")
        .send({
          password: "1234",
          firstName: "firstName",
          lastName: "lastName",
        });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("Find user by email", () => {
    test("find user by email", async() => {
     await request(app).post("/users").send({
          email: "poppy@email.com",
          password: "1234",
          firstName: "Poppy",
          lastName: "Allen",
      })
     const response = await request(app)
      .get("/users")
      .query({ email: "poppy@email.com" });
      expect(response.statusCode).toBe(201)
      expect(response.body.users.email).toEqual("poppy@email.com");
      expect(response.body.users.firstName).toEqual("Poppy");
      expect(response.body.users.lastName).toEqual("Allen");
    })
    })
  })


  // describe("GET, a user by _id", () => {
  //   test("it finds a user", async () => {
  //     let response = await request(app)
  //     .post("/users")
  //     .send({
  //         email: "poppy@email.com",
  //         password: "1234",
  //         firstName: "Poppy",
  //         lastName: "Allen",
  //         _id: 1234
  //     })
  //     expect(response.statusCode).toBe(201);

  //     let response2 = await request(app)
  //     .get("/users")
  //     .send({
  //       _id: 1234
  //     })

  //     expect(response.statusCode).toBe(201)
