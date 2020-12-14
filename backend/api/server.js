const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const reportsRouter = require("./controllers/reports");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("combined"));

server.use("/reports", reportsRouter);

server.get("/", (_req, res) => {
  res.send(
    '<h1>Welcome to the CharterAdmin API!</h1><h3>For documentation <a href="https://github.com/kembreyfarquhar/CharterAdmin/tree/main/backend">click here</a>.</h3><p>This API was made by <a href="https://github.com/kembreyfarquhar">Katie Embrey-Farquhar</a> with ❤️</p>'
  );
});

module.exports = server;
