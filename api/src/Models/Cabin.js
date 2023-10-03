const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Cabins",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.STRING,
      },
      extras: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [
          "https://img.freepik.com/premium-photo/captivating-image-secluded-cabin-situated-shores-tranquil-lake-providing-serene-luxurious-escape-nature_674594-8114.jpg?w=2000",
        ],
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
