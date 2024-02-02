const AbstractManager = require("./AbstractManager");

class MonsterManager extends AbstractManager {
  constructor() {
    super({ table: "monsters" });
  }

  // The C of CRUD - Create operation
  async create(monster) {
    const {
      name,
      family_id: familyId,
      life,
      attack,
      defense,
      xp_give: xpGive,
      golds_give: goldsGive,
    } = monster;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, family_id, life, attack, defense, xp_give, golds_give) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, familyId, life, attack, defense, xpGive, goldsGive]
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id, field) {
    if (field) {
      const [rows] = await this.database.query(
        `SELECT ?? FROM ${this.table} WHERE id = ?`,
        [field, id]
      );

      if (rows.length === 0) {
        return null;
      }

      return rows[0][field];
    }

    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  // The U of CRUD - Update operation
  async edit(id, updatedFields) {
    const allowedFields = [
      "name",
      "family_id",
      "life",
      "attack",
      "defense",
      "xp_give",
      "golds_give",
    ];

    const fieldsToUpdate = Object.keys(updatedFields).filter((field) =>
      allowedFields.includes(field)
    );

    const updateValues = fieldsToUpdate.map((field) => updatedFields[field]);

    if (fieldsToUpdate.length === 0) {
      return 0;
    }

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET ${fieldsToUpdate
        .map((field) => `${field} = ?`)
        .join(", ")} WHERE id = ?`,
      [...updateValues, id]
    );

    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = MonsterManager;
