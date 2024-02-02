require("dotenv").config();

const tables = require("../tables");

// The B of BREAD - Browse (Read all) - GET
const browse = async (req, res, next) => {
  try {
    const roles = await tables.roles.readAll();
    res.json(roles);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read one - GET
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field } = req.query;

    const role = await tables.roles.read(id);

    if (field && role && Array.isArray(role[field])) {
      res.json({ [field]: role[field] });
    } else if (role) {
      res.json(role);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const roleId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const { rolename } = req.body;

    const role = await tables.roles.read(roleId);

    if (!role) {
      return res.status(404).json({ message: "role not found" });
    }

    const updatedFields = {};

    if (rolename !== undefined) {
      updatedFields.rolename = rolename;
    }

    const affectedRows = await tables.roles.edit(roleId, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editedrole = await tables.roles.read(roleId);
    return res.json({
      message: "Success Update",
      role: editedrole,
    });
  } catch (error) {
    console.error("Error on role update", error);
    return res.status(500).json({ message: "Error on role update" });
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const { name } = req.body;

    const role = {
      name,
    };

    const insertId = await tables.roles.create(role);

    res.status(201).json({ message: "Success", id: insertId });
  } catch (err) {
    console.error("Error on role creation", err);
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy = async (req, res, next) => {
  try {
    await tables.roles.delete(req.params.id);

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
