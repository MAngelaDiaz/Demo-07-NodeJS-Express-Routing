const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/payments", (request, response) => {
  response.status(200).json({ message: "GET all payments" });
});

app.post("/payments", (request, response) => {
  response.status(200).json({ message: `CREATE new payments` });
});

app.get("/payments/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `GET payments with id ${request.params.id}` });
});

app.put("/payments/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `UPDATE payments with id ${request.params.id}` });
});

app.delete("/payments/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `DELETE payments with id ${request.params.id}` });
});

module.exports = router;
