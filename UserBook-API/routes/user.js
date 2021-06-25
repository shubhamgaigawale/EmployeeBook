
const express = require("express");
const { getUserById, createUser, getUser, getAllUSer, updateUser, deleteUser } = require("../controller/user");
const router = express.Router();

router.param("userId", getUserById);

router.post("/create", createUser)

router.get("/:userId", getUser)

router.get("/", getAllUSer);

router.put("/update/:userId",updateUser)

router.delete("/delete/:userId", deleteUser)

module.exports = router;