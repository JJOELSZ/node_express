const express = require("express");
const router = express.Router();
const {
  getTasks,
  postTask,
  getTask,
  putTask,
  delTask,
} = require("../controllers/task");

router.get("/", getTasks);
router.post("/", postTask);
router.get("/:id", getTask);
router.put("/:id", putTask);
router.delete("/:id", delTask);

module.exports = router;
