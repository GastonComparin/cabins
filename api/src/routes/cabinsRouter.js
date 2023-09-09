const { Router } = require("express");
const cabinsRouter = Router();

cabinsRouter.get("/", (req, res) => {
  res.status(200).send("NIY: Muestra todas las cabañas disponibles");
});
cabinsRouter.get("/:id", (req, res) => {
  res.status(200).send("NIY: Muestra el detalle de alguna cabaña");
});
cabinsRouter.post("/", (req, res) => {
  res.status(200).send("NIY: Crea una nueva cabaña");
});
cabinsRouter.delete("/:id", (req, res) => {
  res.status(200).send("NIY: Elimina alguna cabaña en particular");
});
module.exports = cabinsRouter;
