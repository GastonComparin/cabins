const createCabin = require("../../Controllers/cabinsControllers/createCabinController");
const createCabinHandler = async (req, res) => {
  const { name, capacity, extras, price, direction, image } = req.body;
  try {
    const newCabin = await createCabin(
      name,
      capacity,
      extras,
      price,
      direction,
      image
    );
    res.status(201).json(newCabin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = createCabinHandler;
