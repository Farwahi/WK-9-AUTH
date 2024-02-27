const { Router } = require("express");

const userRouter = Router();

const { hashPass, comparePass, } = require("../middleware/auth");

const { signupUser, getAllUsers,login,getOneUser,deleteUser,deleteAllUsers,updateUser } = require("./controller");

userRouter.post("/users/signup", hashPass,signupUser);

userRouter.get("/users/getAllUsers", getAllUsers);

userRouter.post("/users/login",comparePass,login);

userRouter.get("/users/getOneUser/:username", getOneUser);

userRouter.get("/users/deleteUser", deleteUser,);

userRouter.get("/users/deleteAllUsers", deleteAllUsers,);

userRouter.get("/users/updateUser", updateUser,);


module.exports = userRouter;