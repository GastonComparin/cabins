const deleteUser = require("../../Controllers/userControllers/DeleteUserController");
const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};
module.exports = deleteUserHandler;
