require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const knex = require("knex");
const path = require("path");
const {
  NODE_ENV,
  DATABASE_URL,
  CLIENT,
  HOST,
  USER,
  PASSWORD,
  DATABASE,
} = require("./config");

const cardRouter = require("./cards/cards-router");

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());
app.use(express.json());

let db;

if (CLIENT === "pg") {
  db = knex({
    client: "pg",
    connection: DATABASE_URL,
  });
} else {
  db = knex({
    client: "mysql",
    connection: {
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
    },
  });
}

app.set("db", db);

app.use("/api/cards", cardRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    response = { message: error.message, error };
  }
  console.error(error);
  res.status(500).json(response);
});

module.exports = app;
