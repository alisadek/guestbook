const express = require("express");

const { getAllComments } = require("./comments.controller");

const commentsRouter = express.Router();

commentsRouter.get("/comments", getAllComments);

module.exports = commentsRouter;
