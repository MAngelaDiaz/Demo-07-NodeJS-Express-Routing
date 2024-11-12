const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

//Customers
const customerRouter = require("./routers/customer");
app.use("/customers", customerRouter);

//Orders
const orderRouter = require("./routers/order");
app.use("/orders", orderRouter);

//Payment
const paymentRouter = require("./routers/payment");
app.use("/payments", paymentRouter);
