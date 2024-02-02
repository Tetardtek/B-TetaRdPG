require("dotenv").config();

const tables = require("../tables");

// The B of BREAD - Browse (Read all) - GET
const browse = async (req, res, next) => {
  try {
    const players = await tables.players.readAll();
    res.json(players);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read one - GET
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field } = req.query;

    const player = await tables.players.read(id);

    if (field && player && Array.isArray(player[field])) {
      res.json({ [field]: player[field] });
    } else if (player) {
      res.json(player);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const playerId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const {
      nickname,
      types_id: typesId,
      xp_amount: xpAmount,
      level,
      stamina,
      golds_amount: goldsAmount,
      life,
      attack,
      defense,
    } = req.body;

    const player = await tables.players.read(playerId);

    if (!player) {
      return res.status(404).json({ message: "player not found" });
    }

    const updatedFields = {};

    if (nickname !== undefined) {
      updatedFields.nickname = nickname;
    }

    if (typesId !== undefined) {
      updatedFields.types_id = typesId;
    }

    if (xpAmount !== undefined) {
      updatedFields.xp_amount = xpAmount;
    }

    if (level !== undefined) {
      updatedFields.level = level;
    }

    if (stamina !== undefined) {
      updatedFields.stamina = stamina;
    }

    if (goldsAmount !== undefined) {
      updatedFields.golds_amount = goldsAmount;
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

    const affectedRows = await tables.players.edit(playerId, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editedplayer = await tables.players.read(playerId);
    return res.json({
      message: "Success Update",
      player: editedplayer,
    });
  } catch (error) {
    console.error("Error on player update", error);
    return res.status(500).json({ message: "Error on player update" });
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  try {
    const {
      nickname,
      types_id: typesId,
      xp_amount: xpAmount,
      level,
      stamina,
      golds_amount: goldsAmount,
      life,
      attack,
      defense,
    } = req.body;

    const player = {
      nickname,
      types_id: typesId,
      xp_amount: xpAmount,
      level,
      stamina,
      golds_amount: goldsAmount,
      life,
      attack,
      defense,
    };

    const insertId = await tables.players.create(player);

    res.status(201).json({ message: "Success", id: insertId });
  } catch (err) {
    console.error("Error on player creation", err);
    next(err);
  }
};

// The D of BREAD - Delete operation
const destroy = async (req, res, next) => {
  try {
    await tables.players.delete(req.params.id);

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
