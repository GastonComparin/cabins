const { Router } = require("express");
const userRouter = require("./userRouter");
const cabinsRouter = require("./cabinsRouter");
const myRouter = Router();

myRouter.use("/users", userRouter);
myRouter.use("/cabins", cabinsRouter);

module.exports = myRouter;
