const router = require("express").Router();

// const { verifyToken } = require("../src/middleware/verifyToken");
// const { validateEmail } = require("../src/middleware/emailValidation");
const { hashPassword, comparePassword } = require("../middleware/auth");
const {
    createUser,
    signInUser,
    getAllUsers,
    verifyUser,
    getUsersBooks,
    updateUserById,
    deleteUserById,
} = require("./controllers");

// router.get("/", verifyToken, getAllUsers);
// router.get("/:id/books", verifyToken, getUsersBooks);
// router.post("/signup", validateEmail, hashPassword, createUser);
// router.post("/signin", comparePassword, signInUser);
// router.post("/verify", verifyToken, verifyUser);
// router.patch("/:id", verifyToken, hashPassword, updateUserById);
// router.delete("/:id", verifyToken, deleteUserById);
router.get("/", getAllUsers);
router.get("/:id/books",  getUsersBooks);
router.post("/signup",  hashPassword, createUser);
router.post("/signin",  signInUser);
router.post("/verify",  verifyUser);
router.patch("/:id",  hashPassword, updateUserById);
router.delete("/:id", deleteUserById);
module.exports = router;
