import supertest from "supertest";
import app from "./app.js";

const request = supertest(app);

describe("POST /users", () => {
  describe("when the request is successful", () => {
    // should save the user in the database
    it("should save the user in the database", async () => {
      const response = await request.post("/users").send({
        name: "John",
        email: "<EMAIL>",
        password: "<PASSWORD>",
      });
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("application/json")
      );
      expect(response.body.name).toBe("John");
      expect(response.body.email).toBe("<EMAIL>");
      expect(response.body.password).toBe("<PASSWORD>");
      expect(response.body.id).toBeDefined();
    });
  });
  describe("when the request is unsuccessful", () => {});
});
