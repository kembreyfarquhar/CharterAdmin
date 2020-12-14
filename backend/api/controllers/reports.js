const router = require("express").Router();

const Transactions = require("../models/transactions");

router.get("/quarterly-transactions", async (req, res) => {
  try {
    const transactions = await Transactions.getFull();

    const sortedTransactions = transactions.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    res.status(200).json(sortedTransactions);
  } catch (err) {
    res.status(500).json(err.toString());
  }
});

module.exports = router;
