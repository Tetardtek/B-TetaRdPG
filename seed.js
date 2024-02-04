// eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const insertExperiences = async () => {
  return database.query(`
  INSERT INTO experiences (level, xp_quantity) VALUES
  ('1', '100'),
  ('2', '200'),
  ('3', '300'),
  ('4', '400'),
  ('5', '500'),
  ('6', '750'),
  ('7', '1000'),
  ('8', '1500'),
  ('9', '2000'),
  ('10', '2500'),
  ('11', '3000'),
  ('12', '3500'),
  ('13', '4000'),
  ('14', '4500'),
  ('15', '5000'),
  ('16', '5500'),
  ('17', '6000'),
  ('18', '6500'),
  ('19', '7000'),
  ('20', '7500'),
  ('21', '8000'),
  ('22', '8500'),
  ('23', '9000'),
  ('24', '9500'),
  ('25', '10000'),
  ('26', '10500'),
  ('27', '11000'),
  ('28', '11500'),
  ('29', '12000'),
  ('30', '12500'),
  ('31', '13000'),
  ('32', '13500'),
  ('33', '14000'),
  ('34', '14500'),
  ('35', '15000'),
  ('36', '15500'),
  ('37', '16000'),
  ('38', '16500'),
  ('39', '17000'),
  ('40', '17500'),
  ('41', '18000'),
  ('42', '18500'),
  ('43', '19000'),
  ('44', '19500'),
  ('45', '20000'),
  ('46', '20500'),
  ('47', '21000'),
  ('48', '21500'),
  ('49', '22000'),
  ('50', '22500'),
  ('51', '23000'),
  ('52', '23500'),
  ('53', '24000'),
  ('54', '24500'),
  ('55', '25000'),
  ('56', '25500'),
  ('57', '26000'),
  ('58', '26500'),
  ('59', '27000'),
  ('60', '27500'),
  ('61', '28000'),
  ('62', '28500'),
  ('63', '29000'),
  ('64', '29500'),
  ('65', '30000'),
  ('66', '30500'),
  ('67', '31000'),
  ('68', '31500'),
  ('69', '32000'),
  ('70', '32500'),
  ('71', '33000'),
  ('72', '33500'),
  ('73', '34000'),
  ('74', '34500'),
  ('75', '35000'),
  ('76', '35500'),
  ('77', '36000'),
  ('78', '36500'),
  ('79', '37000'),
  ('80', '37500'),
  ('81', '38000'),
  ('82', '38500'),
  ('83', '39000'),
  ('84', '39500'),
  ('85', '40000'),
  ('86', '40500'),
  ('87', '41000'),
  ('88', '41500'),
  ('89', '42000'),
  ('90', '42500'),
  ('91', '43000'),
  ('92', '43500'),
  ('93', '44000'),
  ('94', '44500'),
  ('95', '45000'),
  ('96', '45500'),
  ('97', '46000'),
  ('98', '46500'),
  ('99', '47000'),
  ('100', '47500'),
  ('101', '48000'),
  ('102', '48500'),
  ('103', '49000'),
  ('104', '49500'),
  ('105', '50000'),
  ('106', '50500'),
  ('107', '51000'),
  ('108', '51500'),
  ('109', '52000'),
  ('110', '52500')
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
