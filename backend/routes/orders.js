const express = require("express");
const router = express.Router();

// GET Order API
router.get("/", (req, res) => {
    res.json({
        message: "Orders API working!"
    });
});

// POST Order API
router.post("/", (req, res) => {

    const order = req.body;

    res.json({
        message: "Order placed successfully!",
        order
    });
});

module.exports = router;