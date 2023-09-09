const userLogin = require("../../Controllers/userControllers/LoginUserController");
const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await userLogin(email, password);
    res.status(200).json({ login });
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};
module.exports = loginUserHandler;
