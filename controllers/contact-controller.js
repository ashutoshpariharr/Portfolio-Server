const Contact = require("../model/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Contact data send succesfully" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Something error look like inside you project." });
  }
};

module.exports = contactForm;
