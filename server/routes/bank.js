const BankAccount = require("../models/BankAccount");
const { verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

// Create account
router.post("/", async (req, res) => {
  const newAccount = new BankAccount(req.body);

  try {
    const savedAccount = await newAccount.save();
    res.status(200).json(savedAccount);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update balance
router.put("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedAccount = await BankAccount.findOneAndUpdate(
      { accountNo: req.body.accountNo },
      { balance: req.body.balance },
      { new: true }
    );
    res.status(200).json(updatedAccount);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get account by account number
router.get("/:accountNo", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const account = await BankAccount.findOne({
      accountNo: req.params.accountNo,
    });
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
