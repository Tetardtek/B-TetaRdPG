// eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const insertExperiences = async () => {
  return database.query(`
  INSERT INTO experiences (xp_quantity) VALUES
  ('100'),
  ('200'),
  ('300'),
  ('400'),
  ('500'),
  ('750'),
  ('1000'),
  ('1500'),
  ('2000'),
  ('2500'),
  ('3000'),
  ('3500'),
  ('4000'),
  ('4500'),
  ('5000'),
  ('5500'),
  ('6000'),
  ('6500'),
  ('7000'),
  ('7500'),
  ('8000'),
  ('8500'),
  ('9000'),
  ('9500'),
  ('10000'),
  ('10500'),
  ('11000'),
  ('11500'),
  ('12000'),
  ('12500'),
  ('13000'),
  ('13500'),
  ('14000'),
  ('14500'),
  ('15000'),
  ('15500'),
  ('16000'),
  ('16500'),
  ('17000'),
  ('17500'),
  ('18000'),
  ('18500'),
  ('19000'),
  ('19500'),
  ('20000'),
  ('20500'),
  ('21000'),
  ('21500'),
  ('22000'),
  ('22500'),
  ('23000'),
  ('23500'),
  ('24000'),
  ('24500'),
  ('25000'),
  ('25500'),
  ('26000'),
  ('26500'),
  ('27000'),
  ('27500'),
  ('28000'),
  ('28500'),
  ('29000'),
  ('29500'),
  ('30000'),
  ('30500'),
  ('31000'),
  ('31500'),
  ('32000'),
  ('32500'),
  ('33000'),
  ('33500'),
  ('34000'),
  ('34500'),
  ('35000'),
  ('35500'),
  ('36000'),
  ('36500'),
  ('37000'),
  ('37500'),
  ('38000'),
  ('38500'),
  ('39000'),
  ('39500'),
  ('40000'),
  ('40500'),
  ('41000'),
  ('41500'),
  ('42000'),
  ('42500'),
  ('43000'),
  ('43500'),
  ('44000'),
  ('44500'),
  ('45000'),
  ('45500'),
  ('46000'),
  ('46500'),
  ('47000'),
  ('47500'),
  ('48000'),
  ('48500'),
  ('49000'),
  ('49500'),
  ('50000'),
  ('50500'),
  ('51000'),
  ('51500'),
  ('52000'),
  ('52500')
  `);
};

const insertRoles = async () => {
  return database.query(`
  INSERT INTO roles (rolename) VALUES
  ('user'),
  ('moderator'),
  ('administrator')
  `);
};

const insertTypes = async () => {
  return database.query(`
  INSERT INTO types (name) VALUES
  ('Melee'),
  ('Distant'),
  ('Magic')
  `);
};

const insertPlayers = async () => {
  return database.query(`
  INSERT INTO players (nickname, types_id, xp_amount, level, stamina, golds_amount, life, attack, defense) VALUES
  ('Administrator', 1, 0, 111, 1000, 10000, 1000, 100, 100),
  ('Moderator', 1, 0, 110, 1000, 10000, 1000, 100, 100)
  `);
};

const insertUsers = async () => {
  return database.query(`
  INSERT INTO users (firstname, lastname, nickname, mail, birthdate, logdate, password, roles_id, players_id) VALUES
  ('Admin', 'istrator', 'Administrator', 'administrator@email.com', '2000-01-01', '2000-01-02', '$2b$10$4VWdZ7SANvRr7qn3k6LAEu6eGApGQUvPOqcCCmgzVLKNlSpBL0rGa', 3, 1),
  ('Mode', 'rator', 'Moderator', 'moderator@email.com', '2010-01-01', '2010-01-02', '$2b$10$c4u.4Q1LzVQBKm.SKX2nPuWEZ/I3jiMUygxr.mMZK4MVJilKYX0rC', 2, 2)
  `);
};

const insertFamily = async () => {
  return database.query(`
  INSERT INTO family (name) VALUES
  ('Sanglier'),
  ('Loup'),
  ('Ours'),
  ('Serpent'),
  ('Araignée'),
  ('Dragon'),
  ('Gobelin'),
  ('Orc'),
  ('Troll'),
  ('Géant'),
  ('Vampire'),
  ('Liche'),
  ('Squelette'),
  ('Zombie'),
  ('Goule'),
  ('Fantôme'),
  ('Démon'),
  ('Diable'),
  ('Ange'),
  ('Dieu')
  `);
};

const insertMonsters = async () => {
  return database.query(`
  INSERT INTO monsters (name, family_id, life, attack, defense, xp_give, golds_give) VALUES
  ('Jeune Sanglier', 1, 10, 5, 5, 10, 10),
  ('Sanglier', 1, 20, 10, 10, 20, 20),
  ('Vieux Sanglier', 1, 30, 15, 15, 30, 30),
  ('Jeune Loup', 2, 10, 5, 5, 10, 10),
  ('Loup', 2, 20, 10, 10, 20, 20),
  ('Vieux Loup', 2, 30, 15, 15, 30, 30),
  ('Jeune Ours', 3, 10, 5, 5, 10, 10),
  ('Ours', 3, 20, 10, 10, 20, 20),
  ('Vieux Ours', 3, 30, 15, 15, 30, 30),
  ('Jeune Serpent', 4, 10, 5, 5, 10, 10),
  ('Serpent', 4, 20, 10, 10, 20, 20),
  ('Vieux Serpent', 4, 30, 15, 15, 30, 30),
  ('Jeune Araignée', 5, 10, 5, 5, 10, 10),
  ('Araignée', 5, 20, 10, 10, 20, 20),
  ('Vieux Araignée', 5, 30, 15, 15, 30, 30),
  ('Jeune Dragon', 6, 10, 5, 5, 10, 10),
  ('Dragon', 6, 20, 10, 10, 20, 20),
  ('Vieux Dragon', 6, 30, 15, 15, 30, 30),
  ('Jeune Gobelin', 7, 10, 5, 5, 10, 10),
  ('Gobelin', 7, 20, 10, 10, 20, 20),
  ('Vieux Gobelin', 7, 30, 15, 15, 30, 30),
  ('Jeune Orc', 8, 10, 5, 5, 10, 10),
  ('Orc', 8, 20, 10, 10, 20, 20),
  ('Vieux Orc', 8, 30, 15, 15, 30, 30),
  ('Troll', 9, 40, 20, 20, 40, 40),
  ('Géant', 10, 50, 25, 25, 50, 50),
  ('Vampire', 11, 60, 30, 30, 60, 60),
  ('Liche', 12, 70, 35, 35, 70, 70),
  ('Squelette', 13, 80, 40, 40, 80, 80),
  ('Zombie', 14, 90, 45, 45, 90, 90),
  ('Goule', 15, 100, 50, 50, 100, 100),
  ('Fantôme', 16, 110, 55, 55, 110, 110),
  ('Démon', 17, 120, 60, 60, 120, 120),
  ('Diable', 18, 130, 65, 65, 130, 130),
  ('Ange', 19, 140, 70, 70, 140, 140),
  ('Dieu', 20, 150, 75, 75, 150, 150)
  `);
};

const seed = async () => {
  try {
    await database.query("START TRANSACTION");

    await insertExperiences();
    await insertRoles();
    await insertTypes();
    await insertPlayers();
    await insertUsers();
    await insertFamily();
    await insertMonsters();

    await database.query("COMMIT");

    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    await database.query("ROLLBACK");
    console.error("Error filling the database:", err.message);
  }
};

seed();
