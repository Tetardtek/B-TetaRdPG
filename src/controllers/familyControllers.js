require("dotenv").config();

const tables = require("../tables");

// The B of BREAD - Browse (Read all) - GET
const browse = async (req, res, next) => {
  try {
    const familys = await tables.family.readAll();
    res.json(familys);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read one - GET
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field } = req.query;

    const family = await tables.family.read(id);

    if (field && family && Array.isArray(family[field])) {
      res.json({ [field]: family[field] });
    } else if (family) {
      res.json(family);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const familyId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const { name } = req.body;

    const family = await tables.family.read(familyId);

    if (!family) {
      return res.status(404).json({ message: "family not found" });
    }

    const updatedFields = {};

    if (name !== undefined) {
      updatedFields.name = name;
    }

    const affectedRows = await tables.family.edit(familyId, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editedfamily = await tables.family.read(familyId);
    return res.json({
      message: "Success Update",
      family: editedfamily,
    });
  } catch (error) {
    console.error("Error on family update", error);
    return res.status(500).json({ message: "Error on family update" });
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const { name } = req.body;

    const family = {
      name,
    };

    const insertId = await tables.family.create(family);

    res.status(201).json({ message: "Success", id: insertId });
  } catch (err) {
    console.error("Error on family creation", err);
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy = async (req, res, next) => {
  try {
    await tables.family.delete(req.params.id);

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
