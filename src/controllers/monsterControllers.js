require("dotenv").config();

const tables = require("../tables");

// The B of BREAD - Browse (Read all) - GET
const browse = async (req, res, next) => {
  try {
    const monsters = await tables.monsters.readAll();
    res.json(monsters);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read one - GET
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field } = req.query;

    const monster = await tables.monsters.read(id);

    if (field && monster && Array.isArray(monster[field])) {
      res.json({ [field]: monster[field] });
    } else if (monster) {
      res.json(monster);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const monsterId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const {
      name,
      family_id: familyId,
      life,
      attack,
      defense,
      xp_give: xpGive,
      golds_give: goldsGive,
    } = req.body;

    const monster = await tables.monsters.read(monsterId);

    if (!monster) {
      return res.status(404).json({ message: "monster not found" });
    }

    const updatedFields = {};

    if (name !== undefined) {
      updatedFields.name = name;
    }

    if (familyId !== undefined) {
      updatedFields.family_id = familyId;
    }

    if (life !== undefined) {
      updatedFields.life = life;
    }

    if (attack !== undefined) {
      updatedFields.attack = attack;
    }

    if (defense !== undefined) {
      updatedFields.defense = defense;
    }

    if (xpGive !== undefined) {
      updatedFields.xp_give = xpGive;
    }

    if (goldsGive !== undefined) {
      updatedFields.golds_give = goldsGive;
    }

    const affectedRows = await tables.monsters.edit(monsterId, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editedmonster = await tables.monsters.read(monsterId);
    return res.json({
      message: "Success Update",
      monster: editedmonster,
    });
  } catch (error) {
    console.error("Error on monster update", error);
    return res.status(500).json({ message: "Error on monster update" });
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const {
      name,
      family_id: familyId,
      life,
      attack,
      defense,
      xp_give: xpGive,
      golds_give: goldsGive,
    } = req.body;

    const monster = {
      name,
      family_id: familyId,
      life,
      attack,
      defense,
      xp_give: xpGive,
      golds_give: goldsGive,
    };

    const insertId = await tables.monsters.create(monster);

    res.status(201).json({ message: "Success", id: insertId });
  } catch (err) {
    console.error("Error on monster creation", err);
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy = async (req, res, next) => {
  try {
    await tables.monsters.delete(req.params.id);

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
