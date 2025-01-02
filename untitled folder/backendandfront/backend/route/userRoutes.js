const express = require("express");
const { register, display } = require("../controller/registration");
const router = express.Router();

// router.post("/register", register);
router.post("/register", register); // Changed to "/api/auth/register"

router.get("/users", display);

module.exports = router;
