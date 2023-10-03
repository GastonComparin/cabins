const { Router } = require("express");
const getCabinsHandler = require("../Handlers/cabinsHandlers/getCabinsHandler");
const createCabinHandler = require("../Handlers/cabinsHandlers/createCabinHandler");
const getCabinDetailHandler = require("../Handlers/cabinsHandlers/getCabinDetailHandler");

const cabinsRouter = Router();

cabinsRouter.get("/", getCabinsHandler);

cabinsRouter.get("/:id", getCabinDetailHandler);

cabinsRouter.post("/", createCabinHandler);
cabinsRouter.delete("/:id", (req, res) => {
  res.status(200).send("NIY: Elimina alguna cabaña en particular");
});
module.exports = cabinsRouter;
