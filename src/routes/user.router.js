const {
  getAll,
  create,
  getOneUser,
  deleteUser,
  update,
} = require("../controllers/user.controllers");
const express = require("express");

const userRouter = express.Router();

userRouter.route("/").get(getAll).post(create);
userRouter.route("/:id").get(getOneUser).delete(deleteUser).put(update);

module.exports = userRouter;
