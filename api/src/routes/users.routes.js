const { Router } = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");
const userControler = new UsersController();


usersRoutes.post("/", userControler.create)
usersRoutes.put("/:id", userControler.update)

module.exports = usersRoutes