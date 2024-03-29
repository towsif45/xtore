const BankAccount = require("../models/BankAccount");
const { verifyTokenAndAuthorization } = require("./verifyToken");
const bcrypt = require("bcrypt");
const router = require("express").Router();

// Create account
router.post("/", async (req, res) => {
  const hashed_pass = await bcrypt.hash(req.body.password, 10);
  const newAccount = new BankAccount({
    userId: req.body.userId,
    accountNo: req.body.accountNo,
    balance: req.body.balance,
    password: hashed_pass,
  });

  try {
    const savedAccount = await newAccount.save();
    res.status(200).json(savedAccount);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update balance
router.put("/", async (req, res) => {
  console.log(req.body);
  try {
    const account = await BankAccount.findOne({
      accountNo: req.body.accountNo,
    });
    if (!account) {
      res.status(404).json("Account not found!");
    } else {
      const pass_check = await bcrypt.compare(
        req.body.password,
        account.password
      );

      if (pass_check) {
        if (req.body.amount <= account.balance) {
          const updatedAccount = await BankAccount.findOneAndUpdate(
            { accountNo: req.body.accountNo },
            { balance: account.balance - req.body.amount },
            { new: true }
          );
          res.status(200).json(updatedAccount);
        } else {
          res.status(405).json("Balance is low!");
        }
      } else {
        res.status(400).json("Wrong password!");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get account by account number
router.get("/:accountNo", async (req, res) => {
  try {
    const account = await BankAccount.findOne({
      accountNo: req.params.accountNo,
    });
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ACCOUNT WITH ID
router.get("/find/:id", async (req, res) => {
  try {
    const account = await BankAccount.findOne({
      userId: req.params.id,
    });
    console.log(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
