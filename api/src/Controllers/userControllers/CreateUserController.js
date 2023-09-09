const { Users } = require("../../db");
const createUser = async (name, email, phone) => {
  return await Users.create({ name, email, phone });
};
module.exports = createUser;
