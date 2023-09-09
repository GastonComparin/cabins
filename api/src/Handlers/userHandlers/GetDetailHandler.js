const userById = require("../../Controllers/userControllers/getDetailController");
const getDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await userById(id);
    res.status(200).json(userId);
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};
module.exports = getDetailHandler;
