const mongoose = require("mongoose");

const BankAccountSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    accountNo: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 500.0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BankAccount", BankAccountSchema);
