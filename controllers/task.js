const { tasksModel } = require("../models");
const handleHttpError = require("../utils/handleHttpError");

/**
 * get Task
 * @param {*} req
 * @param {*} res
 */
const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tasksModel.findById(id);
    res.send(data);
  } catch (error) {
    handleHttpError("Erro al obtener registro", 403, res);
  }
};

/**
 * get Tasks
 * @param {*} req
 * @param {*} res
 */
const getTasks = async (req, res) => {
  try {
    const data = await tasksModel.find({});
    res.send(data);
  } catch (error) {
    handleHttpError("Erro al obtener registros", 403, res);
  }
};

/**
 * post Task
 * @param {*} req
 * @param {*} res
 */
const postTask = async (req, res) => {
  try {
    console.log(req.body);
    const data = await tasksModel.create(req.body);
    res.send(data);
  } catch (error) {
    handleHttpError("Erro al insertar registro", 403, res);
  }
};

/**
 * put Task
 * @param {*} req
 * @param {*} res
 */
const putTask = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await tasksModel.findByIdAndUpdate(id, body);
    res.send(data);
  } catch (error) {
    handleHttpError("Erro al actualizar registro", 403, res);
  }
};

/**
 * delete Task
 * @param {*} req
 * @param {*} res
 */
const delTask = async (req, res) => {
  try {
    console.log("AAA");
    console.log(req.params.id);
    const id = req.params.id;
    const data = await tasksModel.deleteOne({_id: id});
    res.send(data);
  } catch (error) {
    handleHttpError("Error al eliminar registro", 403, res);
  }
};
module.exports = {
  getTasks,
  postTask,
  getTask,
  putTask,
  delTask,
};
