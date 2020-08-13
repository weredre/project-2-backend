const express = require("express");
const shadowAmpsRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/shadowAmps.js");

// routes and middleware specific to this router

shadowAmpsRouter.get("/", index);

shadowAmpsRouter.post("/", create);

shadowAmpsRouter.put("/:id", update);

shadowAmpsRouter.delete("/:id", destroy);

module.exports = shadowAmpsRouter;
