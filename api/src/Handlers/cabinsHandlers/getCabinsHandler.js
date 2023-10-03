const getCabins = require("../../Controllers/cabinsControllers/getCabinsController");
const getCabinsHandler = async (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`voy a buscar por nombre`);
  } else {
    try {
      const allCabins = await getCabins();
      res.status(200).json(allCabins);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
module.exports = getCabinsHandler;
