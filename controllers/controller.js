const Service = require("../model/service-model");

const Services = async (req, res) => {
  try {
    const response = await Service.find()

    if (!response) {
      res.status(401).json({ message: "No service found " });
    }
    res
      .status(200)
      .json({ message: "Response fetch successfully from services", response });
  } catch (error) {
    console.log("service section doe'nt work", error);
  }
};

module.exports = Services;
