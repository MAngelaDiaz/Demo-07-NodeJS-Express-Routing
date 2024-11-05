const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/orders", (request, response) => {
  response.status(200).json({ message: "GET all orders" });
});

app.post("/orders", (request, response) => {
  response.status(200).json({ message: `CREATE new order` });
});

app.get("/orders/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `GET order with id ${request.params.id}` });
});

app.put("/orders/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `UPDATE order with id ${request.params.id}` });
});

app.delete("/orders/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `DELETE order with id ${request.params.id}` });
});

module.exports = routers;
