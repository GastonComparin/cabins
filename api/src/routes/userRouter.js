const { Router } = require("express");
const getUsersHandler = require("../Handlers/userHandlers/getUsersHandler");
const getDetailHandler = require("../Handlers/userHandlers/getDetailHandler");
const createUserHandler = require("../Handlers/userHandlers/createUserHandler");
const deleteUserHandler = require("../Handlers/userHandlers/deleteUserHandler");
const LoginUserHandler = require("../Handlers/userHandlers/loginUserHandler");

const userRouter = Router();

userRouter.get("/", getUsersHandler);

userRouter.get("/:id", getDetailHandler);

userRouter.post("/", createUserHandler);

userRouter.post("/login", LoginUserHandler);

userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;
