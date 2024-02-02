require("dotenv").config();

const tables = require("../tables");

// The B of BREAD - Browse (Read all) - GET
const browse = async (req, res, next) => {
  try {
    const experiences = await tables.experiences.readAll();
    res.json(experiences);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read one - GET
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field } = req.query;

    const experience = await tables.experiences.read(id);

    if (field && experience && Array.isArray(experience[field])) {
      res.json({ [field]: experience[field] });
    } else if (experience) {
      res.json(experience);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const experienceId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const { xp_quantity: xpQuantity } = req.body;

    const experience = await tables.experiences.read(experienceId);

    if (!experience) {
      return res.status(404).json({ message: "experience not found" });
    }

    const updatedFields = {};

    if (xpQuantity !== undefined) {
      updatedFields.xp_quantity = xpQuantity;
    }

    const affectedRows = await tables.experiences.edit(
      experienceId,
      updatedFields
    );

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editedexperience = await tables.experiences.read(experienceId);
    return res.json({
      message: "Success Update",
      experience: editedexperience,
    });
  } catch (error) {
    console.error("Error on experience update", error);
    return res.status(500).json({ message: "Error on experience update" });
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const { xp_quantity: xpQuantity } = req.body;

    const experience = {
      xp_quantity: xpQuantity,
    };

    const insertId = await tables.experiences.create(experience);

    res.status(201).json({ message: "Success", id: insertId });
  } catch (err) {
    console.error("Error on experience creation", err);
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy = async (req, res, next) => {
  try {
    await tables.experiences.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
