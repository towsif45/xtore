const router = require("express").Router();
const Supplier = require("../models/Supplier");
const BankAccount = require("../models/BankAccount");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const newSupplier = new Supplier(req.body);
  try {
    const account = await BankAccount.findOne({
      accountNo: req.body.bank_account,
    });
    if (!account) {
      const hashed_pass = await bcrypt.hash(req.body.password, 10);
      const newAccount = new BankAccount({
        userId: req.body.name,
        accountNo: req.body.bank_account,
        balance: 0.0,
        password: hashed_pass,
      });
      const savedAccount = await newAccount.save();
      console.log(savedAccount);
    }
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
