const { Sequelize, BelongsToMany } = require("sequelize");
const userModel = require("./Models/User");
const cabinModel = require("./Models/Cabin");
require("dotenv").config();
const { DB_user, DB_password, DB_host, DB_name } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_user}:${DB_password}@localhost:${DB_host}/${DB_name}`,
  {
    logging: false,
    native: false,
    dialect: "postgres",
  }
);
userModel(sequelize);
cabinModel(sequelize);

const { Users, cabins } = sequelize.models;
const User_Cabin = sequelize.define("User_Cabin", {}, { timestamps: false });
Users.belongsToMany(cabins, { through: User_Cabin });
cabins.belongsToMany(Users, { through: User_Cabin });
module.exports = { sequelize, ...sequelize.models };
