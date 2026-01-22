import { expect } from "chai";
import supertest from "supertest";
import app from "../src/app.js";

const requester = supertest(app);

describe("Tests funcionales - Adoption Router", () => {

  it("GET /api/adoptions devuelve array", async () => {
    const res = await requester.get("/api/adoptions");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/adoptions crea adopción", async () => {
    const res = await requester.post("/api/adoptions").send({
      userId: "u1",
      petId: "p1"
    });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("id");
  });

  it("POST /api/adoptions falla sin datos", async () => {
    const res = await requester.post("/api/adoptions").send({});
    expect(res.status).to.equal(400);
  });

});
