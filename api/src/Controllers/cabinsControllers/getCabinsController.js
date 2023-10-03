const { Cabins } = require("../../db");
const getCabins = async () => {
  const myCabins = await Cabins.findAll();
  return myCabins.map((cabin) => {
    return {
      name: cabin.name,
      id: cabin.id,
      capacity: cabin.capacity,
      price: cabin.price,
      direction: cabin.direction,
      image: cabin.image,
    };
  });
};
module.exports = getCabins;
