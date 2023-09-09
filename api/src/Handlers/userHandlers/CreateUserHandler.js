const createUser = require("../../Controllers/userControllers/CreateUserController");
const createUserHandler = async (req, res) => {
  const { name, email, phone, password} = req.body;
  try {
    const newUser = await createUser(name, email, phone, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = createUserHandler;
