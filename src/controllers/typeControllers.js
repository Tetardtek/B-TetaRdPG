require("dotenv").config();

const tables = require("../tables");

// The B of BREAD - Browse (Read all) - GET
const browse = async (req, res, next) => {
  try {
    const types = await tables.types.readAll();
    res.json(types);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read one - GET
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field } = req.query;

    const type = await tables.types.read(id);

    if (field && type && Array.isArray(type[field])) {
      res.json({ [field]: type[field] });
    } else if (type) {
      res.json(type);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const typeId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const { name } = req.body;

    const type = await tables.types.read(typeId);

    if (!type) {
      return res.status(404).json({ message: "type not found" });
    }

    const updatedFields = {};

    if (name !== undefined) {
      updatedFields.name = name;
    }

    const affectedRows = await tables.types.edit(typeId, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editedtype = await tables.types.read(typeId);
    return res.json({
      message: "Success Update",
      type: editedtype,
    });
  } catch (error) {
    console.error("Error on type update", error);
    return res.status(500).json({ message: "Error on type update" });
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const { name } = req.body;

    const type = {
      name,
    };

    const insertId = await tables.types.create(type);

    res.status(201).json({ message: "Success", id: insertId });
  } catch (err) {
    console.error("Error on type creation", err);
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy = async (req, res, next) => {
  try {
    await tables.types.delete(req.params.id);

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
