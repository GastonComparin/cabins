const { Users } = require("../../db");

const userById = async (id) => {
  const user = await Users.findOne({ where: { id: id } });
  return {
    id: user.id,
    name: user.name,
    phone: user.phone,
    email: user.email,
    password: user.password,
  };
};
module.exports = userById;
