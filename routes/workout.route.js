import express from "express";
import WorkoutModel from "../models/workout.model.js";

const workoutRouter = express.Router();

workoutRouter.get("/", (req, res) => {
  res.json({
    message: "GET all workouts",
  });
});

workoutRouter.get("/:id", (req, res) => {
  res.json({
    message: "GET a single workout",
  });
});

workoutRouter.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await WorkoutModel.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

workoutRouter.patch("/:id", (req, res) => {
  res.json({
    message: "UPDATE a workout",
  });
});

workoutRouter.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE a workout",
  });
});

export default workoutRouter;
