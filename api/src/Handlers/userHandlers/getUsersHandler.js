const getUsers = require("../../Controllers/userControllers/getUsersController");
const getUsersHandler = async (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`quiero buscar al user con nombre ${name}`);
  } else {
    try {
      const allUsers = await getUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
module.exports = getUsersHandler;
