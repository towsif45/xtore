const BankAccount = require("../models/BankAccount");
const Transaction = require("../models/Transaction");
const router = require("express").Router();

// POST A NEW TRANSACTION
router.post("/", async (req, res) => {
  const transaction = new Transaction(req.body);
  console.log("jklk" + transaction.amount);

  try {
    const reciepentAccount = await BankAccount.findOne({
      accountNo: req.body.to_bank_account,
    });
    if (!reciepentAccount) {
      res.status(404).json("Account not found!");
    } else {
      const updatedReciepentAccount = await BankAccount.findOneAndUpdate(
        { accountNo: reciepentAccount.accountNo },
        { balance: transaction.amount + reciepentAccount.balance },
        { new: true }
      );
      const savedTransaction = await transaction.save();
      res.status(200).json({ savedTransaction, updatedReciepentAccount });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL TRANSACTIONS OF A USER
router.get("/find/:userId", async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL TRANSACTIONS
router.get("/find/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
