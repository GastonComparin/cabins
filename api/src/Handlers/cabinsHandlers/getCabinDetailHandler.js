const cabinById = require("../../Controllers/cabinsControllers/getCabinDetailController");
const getCabinDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const cabinId = await cabinById(id);
    res.status(200).json(cabinId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getCabinDetailHandler;
