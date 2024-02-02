const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import Controllers
const userControllers = require("./controllers/userControllers");
const verifyToken = require("./middlewares/verifyToken");

const experienceControllers = require("./controllers/experienceControllers");
const roleControllers = require("./controllers/roleControllers");
const typeControllers = require("./controllers/typeControllers");
const playerControllers = require("./controllers/playerControllers");
const familyControllers = require("./controllers/familyControllers");
const monsterControllers = require("./controllers/monsterControllers");

// Experience management
router.get("/experiences", experienceControllers.browse);
router.get("/experiences/:id", experienceControllers.read);
router.put("/experiences/:id", experienceControllers.edit);
router.post("/experiences", experienceControllers.add);
router.delete("/experiences/:id", experienceControllers.destroy);

// Role management
router.get("/roles", roleControllers.browse);
router.get("/roles/:id", roleControllers.read);
router.put("/roles/:id", roleControllers.edit);
router.post("/roles", roleControllers.add);
router.delete("/roles/:id", roleControllers.destroy);

// Type management
router.get("/types", typeControllers.browse);
router.get("/types/:id", typeControllers.read);
router.put("/types/:id", typeControllers.edit);
router.post("/types", typeControllers.add);
router.delete("/types/:id", typeControllers.destroy);

// Player management
router.get("/players", playerControllers.browse);
router.get("/players/:id", playerControllers.read);
router.put("/players/:id", playerControllers.edit);
router.post("/players", playerControllers.add);
router.delete("/players/:id", playerControllers.destroy);

// User management
router.get("/users", verifyToken, userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/users/:id/field", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);
router.post("/login", userControllers.login);

// Family management
router.get("/family", familyControllers.browse);
router.get("/family/:id", familyControllers.read);
router.put("/family/:id", familyControllers.edit);
router.post("/family", familyControllers.add);
router.delete("/family/:id", familyControllers.destroy);

// Monster management
router.get("/monsters", monsterControllers.browse);
router.get("/monsters/:id", monsterControllers.read);
router.put("/monsters/:id", monsterControllers.edit);
router.post("/monsters", monsterControllers.add);
router.delete("/monsters/:id", monsterControllers.destroy);

/* ************************************************************************* */

module.exports = router;
