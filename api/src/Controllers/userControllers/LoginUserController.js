const { Users } = require("../../db");
const compare = (password, newPass) => {
  console.log(password, newPass);
  if (password === newPass) return true;
};

const userLogin = async (email, password) => {
  const toLogin = await Users.findOne({ where: { email: email } });
  if (!toLogin) {
    return {
      success: false,
      message: "No se encontro un usuario con ese email",
    };
  } else {
    console.log("econtramos el mail");
    const match = await compare(password, toLogin.password);
    if (match) {
      return { success: true };
    } else {
      return {
        success: false,
        message: "La contraseña ingresada es incorrecta",
      };
    }
  }
};
module.exports = userLogin;
