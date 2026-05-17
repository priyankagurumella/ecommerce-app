const express = require("express");
const router = express.Router();

// Product list API
router.get("/", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Headphones",
            price: 1999
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 2999
        },
        {
            id: 3,
            name: "Mobile Phone",
            price: 14999
        }
    ];

    res.json(products);
});

module.exports = router;