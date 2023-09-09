const { Users } = require("../../db");
const createUser = async (name, email, phone, password) => {
  return await Users.create({ name, email, phone, password });
};
module.exports = createUser;
