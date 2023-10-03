const { Cabins } = require("../../db");
const cabinById = async (id) => {
  const cabin = await Cabins.findOne({ where: { id: id } });
  return {
    id: cabin.id,
    name: cabin.name,
    direction: cabin.direction,
    price: cabin.price,
    image: cabin.image,
  };
};
module.exports = cabinById;
