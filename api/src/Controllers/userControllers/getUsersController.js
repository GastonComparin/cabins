const { Users } = require("../../db");

const getUsers = async () => {
  const myUsers = await Users.findAll();
  return myUsers.map((user) => {
    return {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    };
  });
};
module.exports = getUsers;
