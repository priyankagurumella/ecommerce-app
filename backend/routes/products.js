const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
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
    ]);
});

module.exports = router;