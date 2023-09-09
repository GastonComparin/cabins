const { Users } = require("../../db");
const deleteUser = async (id) => {
  const toDelete = await Users.findOne({ where: { id: id } });
  if (toDelete) {
    await toDelete.destroy();
    return `El usuario ${toDelete.name} se eliminó correctamente`;
  } else {
    return "No se encontró el usuario a eliminar";
  }
};
module.exports = deleteUser;
