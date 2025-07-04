console.log("📦 Task route loaded");

const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  console.log("🛠️ POST /api/tasks called");
  console.log(req.body);

  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// Get Tasks by User
router.get("/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const tasks = await Task.find({
      $or: [{ createdBy: email }, { sharedWith: email }]
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
