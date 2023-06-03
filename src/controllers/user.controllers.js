const catchError = require("../utils/catchError");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});
const create = catchError(async (req, res) => {
  const createUser = req.body;
  const newUser = await User.create(createUser);
  return res.status(201).json(newUser);
});
const getOneUser = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
});
const deleteUser = catchError(async (req, res) => {
  const { id } = req.params;
  const userdelete = await User.destroy({ where: { id } });
  if (!userdelete) return res.status(404).json({ message: "song not found" });
  return res.sendStatus(204);
});
const update = catchError(async (req, res) => {
  const userBody = req.body;
  const { id } = req.params;
  const updateUser = await User.update(userBody, {
    where: { id },
    returning: true,
  });
  if (!updateUser) return res.status(404).json({ message: "User not found" });

  return res.json(updateUser[1][0]);
});
module.exports = {
  getAll,
  create,
  getOneUser,
  deleteUser,
  update,
};
