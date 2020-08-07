const express = require("express");
const characterRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/character.js");


characterRouter.get("/", index);


characterRouter.post("/", create);


characterRouter.put("/:id", update);


characterRouter.delete("/:id", destroy);

module.exports = characterRouter;
