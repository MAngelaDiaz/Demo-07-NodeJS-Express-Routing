const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Customers
app.get("/customers", (request, response) => {
  response.status(200).json({ message: "GET all customers" });
});

app.post("/customers", (request, response) => {
  response.status(200).json({ message: `CREATE new customer` });
});

app.get("/customers/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `GET customer with id ${request.params.id}` });
});

app.put("/customers/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `UPDATE customer with id ${request.params.id}` });
});

app.delete("/customers/:id", (request, response) => {
  response
    .status(200)
    .json({ message: `DELETE customer with id ${request.params.id}` });
});

module.exports = router;
