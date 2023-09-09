const { Users } = require("../../db");

const getUsers = async () => {
  const myUsers = await Users.findAll();
  return myUsers.map((user) => {
    return {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
    };
  });
};
module.exports = getUsers;
