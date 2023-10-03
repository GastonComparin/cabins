const { Cabins } = require("../../db");
const createCabin = async (name, capacity, extras, price, direction, image) => {
  return await Cabins.create({
    name,
    capacity,
    extras,
    price,
    direction,
    image,
  });
};
module.exports = createCabin;
