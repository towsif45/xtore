const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    from_bank_account: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    to_bank_account: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
