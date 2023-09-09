const getDetailHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send("NIY: Trae el detalle de un user");
};
module.exports = getDetailHandler;
