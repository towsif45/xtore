const cors = require('cors')
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const bankRoute = require("./routes/bank");
const supplierRoute = require("./routes/supplier");
const transactionRoute = require("./routes/transaction");

dotenv.config();

mongoose
  .connect("mongodb+srv://admin:admin123456@cluster0.gxbdimz.mongodb.net/xtore?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected :-)");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors())
app.options('*', cors())
app.use(express.json()); // enable aaplication to take json object
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/bank", bankRoute);
app.use("/api/suppliers", supplierRoute);
app.use("/api/transactions", transactionRoute);

app.listen(5000, () => {
  console.log("Backend server is running...");
});
