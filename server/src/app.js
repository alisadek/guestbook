const express = require("express");
const cors = require("cors");

const app = express();

const commentsRouter = require("./routes/comments/comments.router");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(commentsRouter);

module.exports = app;
